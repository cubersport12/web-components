import { LitElement } from 'lit';

export class BaseElement extends LitElement {
	protected override createRenderRoot(): HTMLElement | DocumentFragment {
		const root = this.attachShadow({ mode: 'open' });
		const links = document.head.getElementsByTagName('style');
		for (let i = 0; i < links.length; i++) {
			const link = links.item(i);
			if (link == null) {
				continue;
			}
			root.appendChild(link.cloneNode(true));
		}
		return root;
	}
}
