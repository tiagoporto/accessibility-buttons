import tpConfig from '@tiagoporto/eslint-config'
import pluginJest from 'eslint-plugin-jest'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tpConfig.configs.base,
  {
    rules: {
      // TODO: investigate why this rule is causing issues
      '@html-eslint/indent': 'off',
    },
  },
  {
    // web component
    files: [
      '**/A11yContrastButton.ts',
      '**/A11yFontSizeButton.ts',
      '**/A11yFontSizeIncreaseButton.ts',
      '**/A11yFontSizeDecreaseButton.ts',
    ],
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
