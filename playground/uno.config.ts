import { defineConfig, presetUno } from 'unocss'

import { presetForms } from '../src/index.js'

export default defineConfig({
  presets: [presetUno(), presetForms()],
})
