import { html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseElement } from './base-element';

@customElement('cub-icon')
export class Icon extends BaseElement {
	protected override readonly _useShadowDom = false;

	@property({ type: String })
	public webFontIcon: string | undefined;

	public override render(): TemplateResult {
		return html`<i class="${this.webFontIcon}"></i>`;
	}
}
