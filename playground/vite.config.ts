import { defineConfig } from 'vite'
import unocss from 'unocss/vite'

export default defineConfig({
  // @ts-expect-error osef
  plugins: [unocss()],
})
