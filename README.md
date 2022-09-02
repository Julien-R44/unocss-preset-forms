# unocss-preset-forms

📋 Port of @tailwindcss/forms for UnoCSS.

## Installation

```bash
pnpm install @julr/unocss-preset-forms
```

## Usage 

```ts

import { defineConfig, presetAttributify, presetUno } from 'unocss'
import { presetForms } from '@julr/unocss-preset-forms'

export default defineConfig({
  presets: [
    presetUno(),
    presetForms()
  ],
})
```

## License

[MIT](./LICENSE.md) License © 2022 [Julien Ripouteau](https://github.com/Julien-R44)
