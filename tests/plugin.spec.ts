import prettier from 'prettier'
import { test } from '@japa/runner'
import { createGenerator, presetUno } from 'unocss'

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

  test('doesnt generate preflights if strategy is class', async ({ assert }) => {
    const uno = generateUno({ strategy: 'class' })

    const { css } = await uno.generate('', { preflights: true })

    assert.snapshot(await formatCss(css)).match()
  })

  test('generate correct classes with class strategy', async ({ assert }) => {
    const uno = generateUno({ strategy: 'class' })

    const { css } = await uno.generate('form-input form-textarea', {
      preflights: false,
    })

    assert.snapshot(await formatCss(css)).match()
  })

  test('handle when class belongs to multiple rules', async ({ assert }) => {
    const uno = generateUno({ strategy: 'class' })

    const { css } = await uno.generate('form-select', {
      preflights: false,
    })

    assert.snapshot(await formatCss(css)).match()
  })
})
