import tpConfig from '@tiagoporto/eslint-config'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  ...tpConfig.configs.base,
]
