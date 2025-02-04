import type { Rule } from 'unocss'

import type { buildRules } from './rules.js'
import type { FormsRule, StyleObject, StyleObjectFactory } from './types.js'

/**
 * Resolve multiple styles into a single style object
 */
export function resolveMultipleStyles(styles: Array<StyleObjectFactory | StyleObject>, theme: any) {
  const results = styles.map((style) => {
    if (typeof style === 'function') return style(theme)
    return style
  })

  return Object.assign({}, ...results)
}

/**
 * Convert our Preset rules to UnoCSS plugin rules
 */
export function rulesToUnoRules(rules: FormsRule[]) {
  /**
   * First, we need to group the rules by class name
   */
  const classStylesMap: Record<string, Array<StyleObjectFactory | StyleObject>> = {}
  for (const rule of rules) {
    for (const className of rule.class || []) {
      classStylesMap[className] = classStylesMap[className] || []
      classStylesMap[className].push(rule.styles)
    }
  }

  /**
   * Now, we have a map of every single class name with its styles
   */
  const groups = Object.keys(classStylesMap).map((className) => ({
    class: className,
    styles: classStylesMap[className],
  }))

  return groups.map((rule) => {
    const selectorWithoutDot = rule.class.slice(1)

    /**
     * Since we depend on the `theme` object, we are obliged to create an Uno
     * Dynamic Rule.
     *
     * And Dynamic Rules need to be a tuple of a RegExp and a function that returns
     * the styles.
     */
    const shouldBeDynamicRule = rule.styles.some((style) => typeof style === 'function')
    if (shouldBeDynamicRule) {
      return [
        new RegExp(`^${selectorWithoutDot}$`),
        (_: any, { theme }: any) => resolveMultipleStyles(rule.styles, theme),
      ]
    }

    /**
     * Otherwise, we can just return the selector and the styles
     */
    return [selectorWithoutDot, resolveMultipleStyles(rule.styles, {})]
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
