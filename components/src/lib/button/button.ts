import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { appearanceAttributeConverter, colorAttributeConverter, CubAppearance, CubColor, hoverStyle } from '../core';
import { styles } from './styles';

export class CubButton extends LitElement {
	public static override styles = [
		styles.appearance,
		styles.button,
		hoverStyle
	];

	@property({ type: String, converter: appearanceAttributeConverter })
	public appearance: CubAppearance = 'filled';

	@property({ type: String, converter: colorAttributeConverter })
	public color: CubColor = 'primary';

	protected _getClasses(): string[] {
		return ['cub-hover', 'cub-button', `cub-button-${this.color}`, `cub-button-${this.appearance}`];
	}
}
