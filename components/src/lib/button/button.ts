import { property } from 'lit/decorators.js';
import {
	appearanceAttributeConverter, BaseElement,
	colorAttributeConverter,
	CubAppearance,
	CubColor,
	CubSelectors,
	CubSize,
	CubStyles,
	sizeAttributeConverter
} from '../core';
import { getThemeColorButtonSelector, styles } from './styles';

export class CubButton extends BaseElement {
	public static override styles = [
		styles.appearance,
		styles.button,
		CubStyles.hoverStyle
	];

	@property({ type: String, converter: appearanceAttributeConverter })
	public appearance: CubAppearance = 'filled';

	@property({ type: String, converter: colorAttributeConverter })
	public color: CubColor = 'primary';

	@property({ type: String, converter: sizeAttributeConverter })
	public size: CubSize = 'medium';

	protected _getClasses(): string[] {
		return [
			CubSelectors.hover,
			'cub-button',
			getThemeColorButtonSelector(this.color),
			`cub-${this.appearance}-button`
		];
	}
}
