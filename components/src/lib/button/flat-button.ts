import { css, CSSResultArray, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CubButton } from './button';

@customElement('cub-flat-button')
export class FlatButton extends CubButton {
	public static override styles = [
		css`
      .cub-flat-button {
        height: 42px;
        padding: 5px 10px;
        border-radius: 5px;
      }
  `,
		...CubButton.styles
	];

	public override render(): TemplateResult {
		return html`
      <button role="button" class="${['cub-flat-button', ...this._getClasses()].join(' ')}">
        <slot id="button-slot"></slot>
      </button>
    `;
	}
}
