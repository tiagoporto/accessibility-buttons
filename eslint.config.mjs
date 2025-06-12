import tpConfig from '@tiagoporto/eslint-config'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['**/dist/'],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.jasmine },
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },
  ...tpConfig.configs.base,
  {
    files: ['**/*.{ts,js}'],
    rules: {
      'n/no-unsupported-features/node-builtins': [
        'error',
        {
          ignores: ['localStorage'],
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    rules: { 'jsdoc/require-jsdoc': 'off' },
  },
]
