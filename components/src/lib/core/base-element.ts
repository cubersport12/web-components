import { LitElement } from 'lit';

export class BaseElement extends LitElement {
	protected readonly _useShadowDom: boolean = true;

	public override createRenderRoot(): HTMLElement | DocumentFragment {
		if (this._useShadowDom) {
			return super.createRenderRoot();
		}
		return this;
	}
}
