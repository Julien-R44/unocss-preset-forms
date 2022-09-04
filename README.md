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
    presetForms()
  ],
})
```

## License

[MIT](./LICENSE.md) License © 2022 [Julien Ripouteau](https://github.com/Julien-R44)
