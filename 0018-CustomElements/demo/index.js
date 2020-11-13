class ListContainer extends HTMLElement {
	select = document.createElement('select');
	span = document.createElement('span');
	list = [];
	listeners = [];

	connectedCallback() {
		this.appendChild(this.select);
		this.appendChild(this.span);
		const listener = (e) => {
			this.span.innerText = `\nCurrent value: ${e.target.value}\n`;
		};
		this.listeners.push({ type: 'change', listener });
		this.select.addEventListener('change', listener);
	}
	disconnectedCallback() {
		this.select.remove();
		for (const { type, listener } of this.listeners) {
			this.select.removeEventListener(type, listener);
		}
	}

	static get observedAttributes() {
		return ['data-list'];
	}
	attributeChangedCallback() {
		this.list = JSON.parse(this.dataset.list);
		console.log(this.list);

		while (this.select.firstElementChild != null) {
			this.select.firstElementChild.remove();
		}

		const placeholder = document.createElement('option');
		placeholder.setAttribute('placeholder', 'true');
		placeholder.innerText = '--- Select One ---';
		placeholder.value = '';
		this.select.appendChild(placeholder);

		for (const item of this.list) {
			const option = document.createElement('option');
			option.value = this.list.indexOf(item).toString();
			option.innerText = item;
			this.select.appendChild(option);
		}
	}
}
customElements.define('list-container', ListContainer);

const listContainer = new ListContainer();
document.body.appendChild(listContainer);

listContainer.setAttribute('data-list', JSON.stringify(['foo', 'bar', 'baz']));
