import { ComplexAttributeConverter } from '@lit/reactive-element';

export type CubSize = 'small' | 'medium' | 'large';

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
