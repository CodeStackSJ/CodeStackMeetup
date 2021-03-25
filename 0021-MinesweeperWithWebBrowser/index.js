/**
 * @type {Set<string>}
 */
const mines = new Set();
/**
 * @type {Map<string, HTMLDivElement>}
 */
const tiles = new Map();
/**
 * @type {Set<HTMLDivElement>}
 */
const activatedTiles = new Set();
/**
 * @type {Set<HTMLDivElement>}
 */
const flaggedTiles = new Set();

const main = document.querySelector('main');
const remainingFlagsCounter = document.getElementById('remaining-flags-count');
const gridSizes = /** @type {HTMLSelectElement} */(document.getElementById('grid-sizes'));
const newGameBtn = document.getElementById('new-game');

gridSizes.onchange = () => {
	if (main.children.length === 0 || confirm('this will start a new game. continue?')) {
		startNewGame(Number(gridSizes.value));
	}
};
newGameBtn.onclick = () => {
	startNewGame(Number(gridSizes.value));
};

/**
 * @param {number} max
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max)) || 1;
}

/**
 * @param {number} row
 * @param {number} column
 */
function getAdjacentMineCount(row, column) {
	let adjacentMineCount = 0;

	if (mines.has(`${row}-${column - 1}`)) adjacentMineCount++;
	if (mines.has(`${row}-${column + 1}`)) adjacentMineCount++;
	if (mines.has(`${row - 1}-${column}`)) adjacentMineCount++;
	if (mines.has(`${row - 1}-${column - 1}`)) adjacentMineCount++;
	if (mines.has(`${row - 1}-${column + 1}`)) adjacentMineCount++;
	if (mines.has(`${row + 1}-${column}`)) adjacentMineCount++;
	if (mines.has(`${row + 1}-${column - 1}`)) adjacentMineCount++;
	if (mines.has(`${row + 1}-${column + 1}`)) adjacentMineCount++;

	return adjacentMineCount;
}

/**
 * @param {number} row
 * @param {number} column
 * @param {number} gridSize
 */
function activateAdjacentEmptySquares(row, column, gridSize) {
	if (row > 1 && getAdjacentMineCount(row - 1, column) === 0) {
		tiles.get(`${row - 1}-${column}`)?.click();
	}
	if (row < gridSize && getAdjacentMineCount(row + 1, column) === 0) {
		tiles.get(`${row + 1}-${column}`)?.click();
	}
	if (column > 1 && getAdjacentMineCount(row, column - 1) === 0) {
		tiles.get(`${row}-${column - 1}`)?.click();
	}
	if (column < gridSize && getAdjacentMineCount(row, column + 1) === 0) {
		tiles.get(`${row}-${column + 1}`)?.click();
	}
}

/**
 * @param {number} gridSize
 */
function startNewGame(gridSize) {
	main.style.gridTemplateColumns = `repeat(${gridSize}, 23px)`;
	main.style.gridTemplateRows = `repeat(${gridSize}, 23px)`;

	while (main.firstElementChild != null) {
		main.firstElementChild.remove();
	}

	mines.clear();
	tiles.clear();
	activatedTiles.clear();
	flaggedTiles.clear();

	while (mines.size < gridSize) {
		const row = getRandomInt(gridSize);
		const column = getRandomInt(gridSize);
		mines.add(`${row}-${column}`);
	}

	let explodedCount = 0;
	let flaggedCount = 0;
	let remainingFlags = mines.size;

	function setRemainingFlagsCounterText() {
		remainingFlagsCounter.innerText = `Flags Remaining: ${remainingFlags}`;
	}
	function incrementRemainingFlagsCount() {
		remainingFlags += 1;
		setRemainingFlagsCounterText();
	}
	function decrementRemainingFlagsCount() {
		remainingFlags -= 1;
		setRemainingFlagsCounterText();
	}
	function alertIfGameOver() {
		if (explodedCount + flaggedCount === mines.size) {
			alert(`game over! mines flagged: ${flaggedCount} | mines exploded: ${explodedCount}`);
		}
	}

	for (let row = 1; row <= gridSize; row++) {
		for (let column = 1; column <= gridSize; column++) {
			const tile = document.createElement('div');
			tile.id = `${row}-${column}`;
			tile.style.gridRow = row.toString();
			tile.style.gridColumn = column.toString();
			tile.onclick = () => {
				if (activatedTiles.has(tile)) {
					return;
				}
				const tileHasMine = mines.has(`${row}-${column}`);
				if (flaggedTiles.has(tile)) {
					if (tileHasMine) {
						flaggedCount -= 1;
					}
					incrementRemainingFlagsCount();
					flaggedTiles.delete(tile);
				}
				if (tileHasMine) {
					tile.innerHTML = '&curren;';
					tile.style.color = 'red';
					alert('boom!');

					explodedCount += 1;
					decrementRemainingFlagsCount();
					alertIfGameOver();
				} else {
					const adjacentMineCount = getAdjacentMineCount(row, column);
					if (adjacentMineCount === 0) {
						tile.style.backgroundColor = 'grey';
						activateAdjacentEmptySquares(row, column, gridSize);
					} else {
						tile.innerText = adjacentMineCount.toString();
					}
				}
				activatedTiles.add(tile);
			};
			tile.oncontextmenu = e => {
				e.preventDefault();

				if (activatedTiles.has(tile)) {
					return;
				}
				if (flaggedTiles.has(tile)) {
					flaggedTiles.delete(tile);
					incrementRemainingFlagsCount();
					tile.innerHTML = '';
					return;
				}
				if (remainingFlags === 0) {
					return;
				}

				flaggedTiles.add(tile);
				decrementRemainingFlagsCount();
				tile.innerHTML = '&tritime;';
				if (mines.has(`${row}-${column}`)) {
					flaggedCount += 1;
					alertIfGameOver();
				}
			};

			tiles.set(tile.id, tile);
			main.appendChild(tile);
		}
	}

	setRemainingFlagsCounterText();
}
