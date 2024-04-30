import { ComplexAttributeConverter } from '@lit/reactive-element';

export type CubAppearance = 'filled' | 'outlined';

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
