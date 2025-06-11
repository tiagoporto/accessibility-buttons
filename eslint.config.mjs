import tpConfig from '@tiagoporto/eslint-config'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['**/dist/'],
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.jasmine } } },

  ...tpConfig.configs.base,
]
