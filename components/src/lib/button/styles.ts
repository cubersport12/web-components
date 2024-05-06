import { CSSResultArray, unsafeCSS } from 'lit';
import { CubColor, CubSelectors, CubStyles, ThemeColorKey } from '../core';

export const getThemeColorButtonSelector = (color: CubColor): string => {
	return `cub-${color}-button`;
};

export const getFilledCss = (): CSSResultArray => (Object.keys(CubStyles.themeColorsVars) as ThemeColorKey[])
	.map(x => unsafeCSS(`
	  .cub-filled-button.${getThemeColorButtonSelector(x)}:not(.${CubSelectors.disabled}) {
	    background-color: ${CubSelectors.getThemeBgColor(x)};
	    color: ${CubStyles.getThemeTextColor(x)};
	    border: none;
    }
	`));

const getOutlinedCss = (): CSSResultArray => (Object.keys(CubStyles.themeColorsVars) as ThemeColorKey[])
	.map(x => unsafeCSS(`
	  .cub-outlined-button.${getThemeColorButtonSelector(x)}:not(.${CubSelectors.disabled}) {
	    background-color: white;
	    color: ${CubStyles.themeColorsVars[x]};
	    border: 1px solid ${CubSelectors.getThemeBgColor(x)};
    }
	`));

export const styles = {
	appearance: [getFilledCss(), getOutlinedCss()],
	button: unsafeCSS(`
    .cub-button {
      position: relative;
    }
    .${CubSelectors.disabled} {
      border: none;
    }
  `)
};
