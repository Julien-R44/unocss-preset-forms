import { test } from '@japa/runner'
import { createGenerator, presetUno } from 'unocss'
// @ts-expect-error too lazy to fix
import prettier from 'prettier'
import { presetForms } from '../src/index.js'
import type { PresetFormOptions } from '../src/types.js'

function generateUno(options: PresetFormOptions = {}) {
  return createGenerator({
    presets: [presetUno(), presetForms(options)],
  })
}

function formatCss(css: string) {
  return prettier.format(css, { parser: 'css' })
}

test.group('Plugin', () => {
  test('Generate correct preflights with base strategy', async ({ assert }) => {
    const uno = generateUno()

    const { css } = await uno.generate('', { preflights: true })

    assert.snapshot(await formatCss(css)).match()
  })
})
