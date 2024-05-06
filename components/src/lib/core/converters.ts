import { ComplexAttributeConverter } from '@lit/reactive-element';
import { CubAppearance } from './appearance';
import { CubColor } from './color';
import { CubSize } from './size';

export const appearanceAttributeConverter: ComplexAttributeConverter<CubAppearance, string> = {
	fromAttribute(value: string | null, type?: string): CubAppearance {
		switch (value as CubAppearance) {
			case 'filled':
			case 'outlined':
				return value as CubAppearance;
			default:
				throw new Error(`Invalid appearance value: ${value}`);
		}
	},
	toAttribute(value: CubAppearance, type?: string): string {
		return value;
	}
};

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

export const sizeAttributeConverter: ComplexAttributeConverter<CubSize, string> = {
	fromAttribute(value: string | null, type?: string): CubSize {
		switch (value as CubSize) {
			case 'small':
			case 'large':
			case 'medium':
				return value as CubSize;
			default:
				throw new Error(`Invalid size value: ${value}`);
		}
	},
	toAttribute(value: CubSize, type?: string): string {
		return value;
	}
};

export const booleanAttributeConverter: ComplexAttributeConverter<boolean | undefined, string> = {
	fromAttribute(value: string | null, type?: string): boolean | undefined {
		return value == null ? undefined : value.toLowerCase() === 'true';
	},
	toAttribute(value: boolean, type?: string): string {
		return `${value}`;
	}
};
