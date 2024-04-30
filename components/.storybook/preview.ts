// Replace your-renderer with the renderer you are using (e.g., react, vue3, angular, etc.)
import { Preview } from '@storybook/web-components';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

const preview: Preview = {
  // The default value of the theme arg for all stories
  args: { theme: 'light' }
};

export default preview;
