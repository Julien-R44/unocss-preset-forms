import { defineConfig, presetMini } from 'unocss'

import { presetForms } from '../src/index.js'

export default defineConfig({
  presets: [
    presetMini(),
    presetForms({
      strategy: 'class',
    }),
  ],
})
