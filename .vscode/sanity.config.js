import { defineConfig } from 'sanity';
import { iconify } from 'sanity-plugin-iconify';

export default defineConfig({
  //...
  plugins: [iconify({
    // Optional configuration

    // Filter icons by collection for all Icon fields (this field has typed autocomplete ✨)
    // Defaults to empty array (all collections)
    collections: ['fa-brands', 'mdi', ...],

    // Shows the selected icon name and collection underneath the icon picker
    // Defaults to false
    showName: false,
  })],
});