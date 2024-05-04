import { CubButton } from './button';
import { customElement, query } from 'lit/decorators.js';
import { css, CSSResult, html, TemplateResult, unsafeCSS } from 'lit';
import { CubSelectors, CubSize, CubStyles } from '../core';

@customElement('cub-icon-button')
export class IconButton extends CubButton {
	protected static _getSizeColor(size: CubSize): CSSResult {
		return unsafeCSS(`
      .${CubSelectors.getThemeSize(size)} {
        height: ${CubStyles.getThemeSize(size)};
        width: ${CubStyles.getThemeSize(size)};

        slot {
          font-size: calc(${CubStyles.getThemeSize(size)} / 2.5);
        }
      }
    `);
	}

	public static override styles = [
		css`
      .cub-icon-button {
        padding: 5px 10px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
  `,
		IconButton._getSizeColor('large'),
		IconButton._getSizeColor('medium'),
		IconButton._getSizeColor('small'),
		...CubButton.styles
	];

	public override render(): TemplateResult {
		return html`
      <button role="button" class="${['cub-icon-button', CubSelectors.getThemeSize(this.size), ...this._getClasses()].join(' ')}">
        <slot></slot>
      </button>
    `;
	}
}
