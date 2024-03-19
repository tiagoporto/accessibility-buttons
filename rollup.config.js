import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import license from 'rollup-plugin-license'
import resolve from '@rollup/plugin-node-resolve'

const banner = `
@preserve
Accessibility Buttons v<%= pkg.version %>
http://tiagoporto.github.io/accessibility-buttons
Copyright (c) 2014-present Tiago Porto (http://tiagoporto.com)
Released under the MIT license
`

export default [
  {
    input: 'src/lib/accessibility-buttons.ts',
    output: [
      {
        file: 'dist/accessibility-buttons.es.js',
        format: 'es',
      },
      {
        file: 'dist/accessibility-buttons.umd.js',
        format: 'umd',
        name: 'accessibilityButtons',
      },
    ],
    external(id) {
      return id.includes('core-js')
    },
    plugins: [
      babel({ extensions: ['.js', '.ts'] }),
      resolve({
        extensions: ['.ts', '.js'],
      }),
      license({
        banner,
      }),
    ],
  },
  {
    input: 'src/lib/accessibility-buttons.ts',
    output: [
      {
        file: 'dist/accessibility-buttons.umd.min.js',
        format: 'umd',
        name: 'accessibilityButtons',
      },
    ],
    plugins: [
      babel({ extensions: ['.js', '.ts'] }),
      resolve({
        extensions: ['.ts'],
      }),
      terser(),
      license({
        banner,
      }),
    ],
  },
]
