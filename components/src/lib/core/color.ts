import { ComplexAttributeConverter } from '@lit/reactive-element';

export type CubColor = 'primary' | 'accent' | 'danger' | 'success' | 'gray';

export const colorAttributeConverter: ComplexAttributeConverter<CubColor, string> = {
	fromAttribute(value: string | null, type?: string): CubColor {
		switch (value as CubColor) {
			case 'gray':
			case 'accent':
			case 'danger':
			case 'primary':
			case 'success':
				return value as CubColor;
			default:
				throw new Error(`Invalid color value: ${value}`);
		}
	},
	toAttribute(value: CubColor, type?: string): string {
		return value;
	}
};
