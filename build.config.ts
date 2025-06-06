import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index'],
  declaration: true,
  clean: true,
  externals: ['unocss', 'mini-svg-data-uri', '@unocss/preset-mini', '@unocss/preset-mini/utils'],
})
