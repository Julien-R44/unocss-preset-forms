/**
 * Options accepted by the presetForms preset
 */
export interface PresetFormOptions {
  strategy?: 'base' | 'class'
}

/**
 * A style object is a simple key-value pair of CSS properties and values
 */
export type StyleObject = Record<string, string | number>

/**
 * A style object factory is a function that returns a style object
 * depending on a UnoCSS theme
 */
export type StyleObjectFactory = (theme: any) => Record<string, string>

/**
 * The Preset rules
 */
export interface FormsRule {
  base: string[]
  class?: string[] | null
  styles: StyleObjectFactory | StyleObject
}
