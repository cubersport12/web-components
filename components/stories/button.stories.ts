import { Meta } from '@storybook/web-components';
import '../src/lib';
import { html } from 'lit';
import { CubAppearance, CubStyles } from '../src';

export default {
	title: 'Button',
	argTypes: {
		color: {
			options: Object.keys(CubStyles.themeColorsVars),
			control: 'select'
		},
		appearance: {
			options: ['filled', 'outlined'] as CubAppearance[],
			control: 'select'
		}
	},
	args: {
		color: 'primary',
		appearance: 'filled'
	},
	render: ({ color, appearance }) => html`
    <cub-flat-button color="${color}" appearance="${appearance}">
      <cub-icon webFontIcon="fa-solid fa-house"></cub-icon>
      Применить
    </cub-flat-button>
  `
} satisfies Meta;

export const Button = {};
