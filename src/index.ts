import {definePlugin} from 'sanity'

import {autocompleteString} from './schemas/autocompleteString.js'

export const autocompletInput = definePlugin({
  name: 'sanity-plugin-autocomplete-input',
  schema: {
    types: [autocompleteString],
  },
})
