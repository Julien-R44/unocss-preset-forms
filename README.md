<p align="center">
  <img src="https://user-images.githubusercontent.com/8337858/188330269-7ddfeb8f-54a6-4594-b546-e85a69927e00.png">
</p>

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
    presetForms(), // Add preflights and new rules likes `.form-input`

    presetForms({
      strategy: 'class', // Only add new rules likes `.form-input` and not preflights
    }),

    presetForms({
      strategy: 'base', // Only add preflights and not new rules
    }),

  ],
})
```

As this is a 1-1 port of the Tailwind plugin, please consult their documentation for more information: https://github.com/tailwindlabs/tailwindcss-forms

## License

[MIT](./LICENSE.md) License © 2022 [Julien Ripouteau](https://github.com/Julien-R44)
