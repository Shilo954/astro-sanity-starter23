import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {markdownSchema} from 'sanity-plugin-markdown'


export default defineConfig({
  name: 'default',
  title: 'Astro Sanity Starter',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET ?? process.env.SANITY_DATASET,

  plugins: [structureTool(), visionTool(), markdownSchema()],

  schema: {
    types: schemaTypes,
  },
    // Optional configuration

    // Filter icons by collection for all Icon fields (this field has typed autocomplete ✨)
    // Defaults to empty array (all collections)
    collections: ['fa-brands', 'mdi', ...],

    // Shows the selected icon name and collection underneath the icon picker
    // Defaults to false
    showName: false,

})






