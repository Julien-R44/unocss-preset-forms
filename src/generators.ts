import type { Rule } from 'unocss'
import type { buildRules } from './rules.js'

/**
 * Convert our Preset rules to UnoCSS plugin rules
 */
export function rulesToUnoRules(rules: ReturnType<typeof buildRules>) {
  return rules.flatMap((config) => {
    if (!config.class) return []

    return config.class.map((selector) => {
      const selectorWithoutDot = selector.slice(1)

      /**
       * Since we depend on the `theme` object, we need to create an Uno
       * Dynamic Rule. Dynamic Rules need to be a tuple of a RegExp and a
       * function that returns the styles.
       */
      const shouldBeDynamicRule = typeof config.styles === 'function'
      if (shouldBeDynamicRule) {
        return [
          new RegExp(`^${selectorWithoutDot}$`),
          // @ts-expect-error too lazy to fix
          (_: any, { theme }: any) => config.styles(theme),
        ]
      }

      /**
       * Otherwise, we can just return the selector and the styles
       */
      return [selectorWithoutDot, config.styles]
    })
  }) as Rule[]
}

/**
 * Convert our Preset rules to UnoCSS plugin preflights
 */
export function rulesToUnoPreflights(rules: ReturnType<typeof buildRules>) {
  return [
    {
      getCSS: ({ theme }: { theme: Record<string, any> }) => {
        const style = rules.map((rule) => {
          const selector = rule.base.join(', ')
          const resolvedStyle = typeof rule.styles === 'function' ? rule.styles(theme) : rule.styles

          const styles = Object.entries(resolvedStyle)
            .map(([key, value]) => `${key}: ${value};`)
            .join('\n')

          return `${selector} { ${styles} }`
        })

        return style.join('\n')
      },
    },
  ]
}
