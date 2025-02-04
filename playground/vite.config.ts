import unocss from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  // @ts-expect-error osef
  plugins: [unocss()],
})
