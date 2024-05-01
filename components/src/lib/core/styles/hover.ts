import { css } from 'lit';

export const hoverStyle = css`
  .cub-hover:hover {
    cursor: pointer;
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: var(--cub-hover-color, rgba(0, 0, 0, 0.1));
    }
  }
`;
