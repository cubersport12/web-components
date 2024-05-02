import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import {
	appearanceAttributeConverter,
	colorAttributeConverter,
	CubAppearance,
	CubColor, CubSelectors,
	CubStyles
} from '../core';
import { getThemeColorButtonSelector, styles } from './styles';

export class CubButton extends LitElement {
	public static override styles = [
		styles.appearance,
		styles.button,
		CubStyles.hoverStyle
	];

	@property({ type: String, converter: appearanceAttributeConverter })
	public appearance: CubAppearance = 'filled';

	@property({ type: String, converter: colorAttributeConverter })
	public color: CubColor = 'primary';

	protected _getClasses(): string[] {
		return [
			CubSelectors.hover,
			'cub-button',
			getThemeColorButtonSelector(this.color),
			`cub-${this.appearance}-button`
		];
	}
}
