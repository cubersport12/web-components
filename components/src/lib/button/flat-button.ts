import { css, CSSResult, html, TemplateResult, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CubButton } from './button';
import { CubSelectors, CubSize, CubStyles } from '../core';

@customElement('cub-flat-button')
export class FlatButton extends CubButton {
	protected static _getSizeColor(size: CubSize): CSSResult {
		return unsafeCSS(`
      .${CubSelectors.getThemeSize(size)} {
        height: ${CubStyles.getThemeSize(size)}
      }
    `);
	}

	public static override styles = [
		css`
      .cub-flat-button {
        padding: 5px 10px;
        border-radius: 5px;
      }
  `,
		FlatButton._getSizeColor('large'),
		FlatButton._getSizeColor('medium'),
		FlatButton._getSizeColor('small'),
		...CubButton.styles
	];

	public override render(): TemplateResult {
		return html`
      <button type="button" ?disabled="${this.disabled}" class="${['cub-flat-button', CubSelectors.getThemeSize(this.size), ...this._getClasses()].join(' ')}">
        <slot id="button-slot"></slot>
      </button>
    `;
	}
}
