import { Meta } from '@storybook/web-components';
import '../src/lib';
import { html } from 'lit';

export default {
	title: 'Button',
	render: args => html`
    <cub-flat-button>
      <cub-icon webFontIcon="fa-solid fa-house"></cub-icon>
      Применить
    </cub-flat-button>
    <cub-flat-button>
      <cub-icon webFontIcon="fa-solid fa-times"></cub-icon>
      Применить
    </cub-flat-button>
  `
} satisfies Meta;

export const Button = {};
