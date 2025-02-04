import { definePreset, type Preflight, type Rule } from 'unocss'

import { buildRules } from './rules.js'
import type { PresetFormOptions } from './types.js'
import { rulesToUnoPreflights, rulesToUnoRules } from './generators.js'

/**
 * Forms preset for UnoCSS.
 * Port of `@tailwindcss/forms` for UnoCSS
 */
export const presetForms = definePreset((options?: PresetFormOptions) => {
  const strategy = options?.strategy === undefined ? ['base', 'class'] : [options.strategy]

  const rules = buildRules()
  let unoRules: Rule<object>[] = []
  let unoPreflights: Preflight[] = []

  if (strategy.includes('class')) {
    unoRules = rulesToUnoRules(rules)
  }

  if (strategy.includes('base')) {
    unoPreflights = rulesToUnoPreflights(rules)
  }

  return {
    name: 'unocss-preset-forms',
    rules: unoRules,
    preflights: unoPreflights,
  }
})
