import { Meta, StoryObj } from '@storybook/web-components';
import '../src/lib';
import { html } from 'lit';
import { CubAppearance, CubSize, CubStyles } from '../src';

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
		},
		size: {
			options: ['large', 'medium', 'small'] as CubSize[],
			control: 'select'
		},
		disabled: {
			control: 'boolean'
		}
	},
	args: {
		color: 'primary',
		appearance: 'filled',
		size: 'medium',
		disabled: false,
		onclick: e => {
			console.info(e);
		}
	}
} satisfies Meta;

export const FlatButton: StoryObj = {
	render: ({ color, appearance, size, disabled, onclick }) => html`
    <cub-flat-button @click=${onclick} color="${color}" disabled="${disabled}" appearance="${appearance}" size="${size}">
      <cub-icon webFontIcon="fa-solid fa-house"></cub-icon>
      Применить
    </cub-flat-button>
  `
};

export const IconButton: StoryObj = {
	render: ({ color, appearance, size, disabled, onclick }) => html`
    <cub-icon-button @click=${onclick} color="${color}" disabled="${disabled}" appearance="${appearance}" size="${size}">
      <cub-icon webFontIcon="fa-solid fa-house"></cub-icon>
    </cub-icon-button>
  `
};
