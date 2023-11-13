import { buildRules } from './rules.js'
import type { PresetFormOptions } from './types.js'
import type { Preset } from 'unocss'

/**
 * Forms preset for UnoCSS.
 * Port of `@tailwindcss/forms` for UnoCSS
 */
export function presetForms(options: PresetFormOptions): Preset {
  const strategy = options?.strategy === undefined ? ['base', 'class'] : [options.strategy]

  return {
    name: 'unocss-preset-forms',
    preflights: [
      {
        getCSS: ({ theme }: { theme: Record<string, any> }) => {
          const rules = buildRules(theme)

          const createStyleObject = ([key, value]: [
            string,
            string | Record<string, any>
          ]): string => {
            if (typeof value === 'object') {
              return Object.entries(value)
                .map((styles) => createStyleObject(styles))
                .join('\n')
            }

            return `${key}: ${value};`
          }

          const style = rules.map((rule) => {
            const selector = rule.base.join(', ')

            const styles = Object.entries(rule.styles)
              .map((style) => createStyleObject(style))
              .join('\n')

            return `${selector} { ${styles} }`
          })

          return style.join('\n')
        },
      },
    ],
  }
}
