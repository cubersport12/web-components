import { CubColor } from './color';
import { unsafeCSS } from 'lit';
import { CubSize } from './size';

export type ThemeColorKey = `${keyof Record<CubColor, string>}`;
export type ThemeSizeKey = `${keyof Record<CubSize, string>}`;
type ThemeSizeVars = Record<`cub-${ThemeSizeKey}-size`, `var(--cub-${keyof Record<ThemeSizeKey, unknown>}-size, ${string})`>;
type ThemeColorVars = Record<ThemeColorKey, `var(--cub-${keyof Record<ThemeColorKey, unknown>}-color, ${string})`>;
type ThemeTextColorVars = Record<`${ThemeColorKey}-text-color`, `var(--cub-${keyof Record<ThemeColorKey, unknown>}-text-color, ${string})`>;

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CubSelectors {
	public static readonly hover = 'cub-hover';

	public static getThemeColor(color: CubColor): string {
		return Object.keys(CubStyles.themeColors).find(x => x.includes(color)) ?? '';
	}

	public static getThemeBgColor(color: CubColor): string {
		return CubStyles.themeBgColors[Object.keys(CubStyles.themeBgColors).find(x => x.includes(color)) ?? ''];
	}

	public static getThemeSize(size: CubSize): string {
		return Object.keys(CubStyles.themeSizeVars).find(x => x.includes(size)) ?? '';
	}
}

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CubStyles {
	public static readonly themeSizeVars: ThemeSizeVars = {
		'cub-large-size': 'var(--cub-large-size, 3rem)',
		'cub-medium-size': 'var(--cub-medium-size, 2.5rem)',
		'cub-small-size': 'var(--cub-small-size, 2rem)'
	};

	public static readonly themeColorsVars: ThemeColorVars = {
		accent: 'var(--cub-accent-color, #ff0000)',
		primary: 'var(--cub-primary-color, darkblue)',
		success: 'var(--cub-success-color, darkgreen)',
		gray: 'var(--cub-gray-color, lightgray)',
		danger: 'var(--cub-danger-color, darkred)'
	};

	public static readonly themeTextColorVars: ThemeTextColorVars = {
		'accent-text-color': 'var(--cub-accent-text-color, white)',
		'primary-text-color': 'var(--cub-primary-text-color, white)',
		'success-text-color': 'var(--cub-success-text-color, white)',
		'gray-text-color': 'var(--cub-gray-text-color, white)',
		'danger-text-color': 'var(--cub-danger-text-color, white)'
	};

	public static readonly themeColors = Object.keys(this.themeColorsVars)
		.reduce((acc: Record<string, string>, color) => {
			acc[`cub-${color}-color`] = this.themeColorsVars[color as ThemeColorKey];
			return acc;
		}, {});

	public static readonly themeBgColors = Object.keys(this.themeColorsVars)
		.reduce((acc: Record<string, string>, color) => {
			acc[`cub-${color}-bg-color`] = this.themeColorsVars[color as ThemeColorKey];
			return acc;
		}, {});

	public static readonly hoverStyle = unsafeCSS(`
	  .${CubSelectors.hover}:hover {
      cursor: pointer;
      &:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: inherit;
        top: 0;
        left: 0;
        background-color: var(--cub-hover-color, rgba(0, 0, 0, 0.1));
      }
    }
	`);

	public static getThemeTextColor(color: CubColor): string {
		const key = Object.keys(CubStyles.themeTextColorVars).find(x => x.includes(color)) as keyof ThemeTextColorVars;
		return CubStyles.themeTextColorVars[key];
	}

	public static getThemeSize(size: CubSize): string {
		const key = Object.keys(CubStyles.themeSizeVars).find(x => x.includes(size)) as keyof ThemeSizeVars;
		return CubStyles.themeSizeVars[key];
	}
}
