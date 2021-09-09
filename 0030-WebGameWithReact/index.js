// @ts-nocheck
'use strict';

const { Component, Fragment, createElement } = React;

const seconds = s => s * 1000;
const audioMap = new Map();
const playSoundEffect = name => {
	const audio = new Audio(`assets/${name}.mp3`);
	audio.oncanplaythrough = () => audio.play();
};

const questions = getQuestions();
const calcSlice = _ => Math.floor(questions.length * Math.round(Math.random() * 100) / 100);

class Game extends Component {
	state = {
		current: questions[0],
		showAnswer0: false,
		showAnswer1: false,
		showAnswer2: false,
		showAnswer3: false,
		showAnswer4: false,
		showAnswer5: false,
		showWrongNotification: false,
	};

	render() {
		const answersClasses = [
			'answers',
			'animated',
			'infinite-swing',
			this.state.showAnswer0 ? 'show-answer-0' : undefined,
			this.state.showAnswer1 ? 'show-answer-1' : undefined,
			this.state.showAnswer2 ? 'show-answer-2' : undefined,
			this.state.showAnswer3 ? 'show-answer-3' : undefined,
			this.state.showAnswer4 ? 'show-answer-4' : undefined,
			this.state.showAnswer5 ? 'show-answer-5' : undefined,
		]
			.filter(x => x !== undefined)
			.join(' ');

		console.log(answersClasses);

		return [
			createElement('h2', { key: 'Question' }, `${this.state.current.number}. ${this.state.current.question}`),
			createElement(
				'div',
				{ key: 'Answers', id: 'answers', className: answersClasses },
				this.state.current.answers.map((x, i) => {
					return createElement(
						'div',
						{
							key: `Answer Box ${i}`,
							id: `answer-box-${i}`,
							className: 'answer-box',
							onClick: () => this.toggleAnswer(i),
						},
						createElement('div', { key: 'Preview', className: 'preview' }, i + 1),
						createElement('div', { key: 'Answer', className: 'answer' }, x)
					);
				})
			),
			createElement(Fragment, { key: 'Actions' },
				createElement(
					'button',
					{ title: 'Buzzer', type: 'submit', className: 'game-btn', onClick: () => this.buzz() },
					createElement('h2', {}, String.fromCharCode(215)),
				),
				createElement(
					'button',
					{ title: 'Reset', type: 'submit', className: 'game-btn', onClick: () => this.reset() },
					createElement('h2', {}, String.fromCharCode(8634))
				),
				createElement(
					'button',
					{ title: 'Next', type: 'submit', className: 'game-btn', onClick: () => this.nextQuestion() },
					createElement('h2', {}, String.fromCharCode(187))
				),
				createElement(
					'div',
					{ id: 'wrong-notification', type: 'submit', hidden: !this.state.showWrongNotification },
					createElement('h2', { style: { color: 'orangered', fontSize: '42em', padding: 0, margin: 0 } }, 'X')
				),
			)
		];
	}

	componentDidMount() {
		window.addEventListener('keydown', e => {
			switch (e.code) {
				case 'Numpad1':
				case 'Digit1':
					return this.toggleAnswer(0);
				case 'Numpad2':
				case 'Digit2':
					return this.toggleAnswer(1);
				case 'Numpad3':
				case 'Digit3':
					return this.toggleAnswer(2);
				case 'Numpad4':
				case 'Digit4':
					return this.toggleAnswer(3);
				case 'Numpad5':
				case 'Digit5':
					return this.toggleAnswer(4);
				case 'Enter':
					return this.nextQuestion();
				case 'KeyX':
					return this.buzz();
			}
		});
	}

	toggleAnswer(index) {
		if (index >= this.state.current.answers.length) return;

		const toggleResult = !this.state['showAnswer' + index];
		this.setState({ ['showAnswer' + index]: toggleResult });

		if (toggleResult) {
			playSoundEffect('ding');
		} else {
			playSoundEffect('crank');
		}
	}

	buzz() {
		playSoundEffect('buzz');
		this.setState({ showWrongNotification: true });
		setTimeout(() => this.setState({ showWrongNotification: false }), seconds(1));
	}

	reset() {
		playSoundEffect('crank');
		this.setState({
			showAnswer0: false,
			showAnswer1: false,
			showAnswer2: false,
			showAnswer3: false,
			showAnswer4: false,
			showAnswer5: false,
		});
	}

	nextQuestion() {
		this.reset();

		setTimeout(() => {
			let slice = calcSlice();
			console.log(`\npicked question #${slice + 1}`);

			while (slice >= questions.length) {
				console.log(`whoops, that's too big`);
				slice = calcSlice();
				console.log(`*clears throat* picked question #${slice + 1}`);
			}

			while (slice === (this.state.current.number - 1)) {
				console.log(`oops, picked the last question`);
				slice = calcSlice();
				console.log(`*clears throat* picked question #${slice + 1}`);
			}

			this.setState({ current: questions[slice] });
		}, 100);
	}
}


class Application extends Component {
	state = {
		showFirstHeaderText: false,
		showSecondHeaderText: false,
		showThirdHeaderText: false,
		showGameBoard: false,
		dropHeader: false,
	};

	render() {
		return createElement(Fragment, { key: 'Application' },
			createElement(
				'header',
				{
					key: 'Header',
					hidden: this.state.showGameBoard,
					className: `animated ${this.state.dropHeader ? 'hinge' : 'infinite-swing'}`
				},
				createElement('h1', { onClick: () => this.showGameBoard() },
					createElement('span', { id: 'first', hidden: !this.state.showFirstHeaderText }, 'React'),
					createElement('br'),
					createElement('span', { id: 'second', hidden: !this.state.showSecondHeaderText }, 'Family'),
					createElement('br'),
					createElement('span', { id: 'third', hidden: !this.state.showThirdHeaderText }, 'Feud'),
				)
			),
			this.state.showGameBoard ? createElement(Game, {}) : undefined,
		);
	}

	componentDidMount() {
		playSoundEffect('cheer');

		setTimeout(() => this.setState({ showFirstHeaderText: true }));
		setTimeout(() => this.setState({ showSecondHeaderText: true }), seconds(1));
		setTimeout(() => this.setState({ showThirdHeaderText: true }), seconds(2));
	}

	showGameBoard() {
		playSoundEffect('crank');
		this.setState({ dropHeader: true });
		setTimeout(() => this.setState({ showGameBoard: true }), seconds(1));
	}
}

ReactDOM.render(createElement(Application), document.querySelector('#app-root'));

function getQuestions() {
	return [
		{
			question: 'A game that can be played in a group',
			answers: [
				'Cards',
				'Family Feud',
				'Xbox',
				'Jackbox Party',
				'Monopoly'
			]
		},
		{
			question: 'Something that can be found in a bowl of lomi (besides noodles)',
			answers: [
				'Meat',
				'Fishballs',
				'Eggs',
				'Liver'
			]
		},
		{
			question: 'A restaurant that can be found locally',
			answers: [
				'China Palace',
				'OZ Korean BBQ',
				'That one vietnamese place',
				'Burnie’s',
				'McDonalds'
			]
		},
		{
			question: 'A hot vacation destination',
			answers: [
				'Cancun',
				'Thailand',
				'Philippines',
				'Pepper Mill'
			]
		},
	].map((x, i) => {
		x.number = i + 1;
		return x;
	});
}
