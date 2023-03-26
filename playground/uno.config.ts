import { defineConfig, presetMini } from 'unocss'
import { presetForms } from '../src'

export default defineConfig({
  presets: [presetMini(), presetForms()],
})
