import { css } from 'lit';

export const styles = {
	appearance: [
		css`
      .cub-button-filled {
        color: white;
        background-color: lightblue;
        border: none;
      }
    `,
		css`
      .cub-button-outlined {
        color: lightblue;
        border: 1px solid lightblue;
        background-color: white;
      }
    `],
	button: css`
    .cub-button {
      position: relative;
    }
  `
};
