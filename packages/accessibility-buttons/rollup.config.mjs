import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'

export default [
  {
    input: [
      'src/index.ts',
      'src/A11yContrastButton/a11y-contrast-button.ts',
      'src/A11yFontSizeButton/a11y-font-size-button.ts',
    ],
    output: [
      {
        dir: 'dist',
        format: 'es',
      },
    ],
    plugins: [typescript(), postcss(), terser()],
    external: ['lit', 'lit/directives/if-defined.js', 'tslib'],
  },
]
