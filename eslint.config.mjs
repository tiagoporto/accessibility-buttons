import tpConfig from '@tiagoporto/eslint-config'
import pluginJest from 'eslint-plugin-jest'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      '**/dist/',
      '**/coverage/**',
      'playwright-report/',
      'test-results/',
    ],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },
  ...tpConfig.configs.base,
  {
    // web component
    files: ['**/A11yContrastButton.ts', '**/A11yFontSizeButton.ts'],
    rules: {
      'unicorn/filename-case': [
        'warn',
        {
          case: 'pascalCase',
        },
      ],
    },
  },
  {
    files: ['**/*.test.{ts,js}'],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      ...pluginJest.configs['flat/all'].rules,
      'jest/unbound-method': 'off',
    },
  },
]
