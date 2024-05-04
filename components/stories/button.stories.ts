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
		}
	},
	args: {
		color: 'primary',
		appearance: 'filled',
		size: 'medium'
	}
} satisfies Meta;

export const FlatButton: StoryObj = {
	render: ({ color, appearance, size }) => html`
    <cub-flat-button color="${color}" appearance="${appearance}" size="${size}">
      <cub-icon webFontIcon="fa-solid fa-house"></cub-icon>
      Применить
    </cub-flat-button>
  `
};

export const IconButton: StoryObj = {
	render: ({ color, appearance, size }) => html`
    <cub-icon-button color="${color}" appearance="${appearance}" size="${size}">
      <cub-icon webFontIcon="fa-solid fa-house"></cub-icon>
    </cub-icon-button>
  `
};
