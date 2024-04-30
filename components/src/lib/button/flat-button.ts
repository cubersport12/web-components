import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { appearanceAttributeConverter, CubAppearance } from '../core';
import { styles } from './styles';

@customElement('cub-flat-button')
export class FlatButton extends LitElement {
	public static override styles = [
		css`
      cub-flat-button {
        border: none;
        height: 42px;
        padding: 5px 10px;
      }
  `,
		styles.appearance
	];

	@property({ type: String, converter: appearanceAttributeConverter })
	public appearance: CubAppearance = 'filled';

	public override render(): TemplateResult {
		const classes = ['cub-flat-button'];
		switch (this.appearance) {
			case 'outlined':
				classes.push('cub-button-outlined-appearance');
				break;
			case 'filled':
				classes.push('cub-button-filled-appearance');
				break;
			default:
		}
		return html`
      <button role="button" class="${classes.join(' ')}">
        <slot id="button-slot"></slot>
      </button>
    `;
	}
}
