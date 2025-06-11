export default {
  extends: ['@tiagoporto/stylelint-config'],
  overrides: [
    {
      files: ['**/*.css'],
      rules: {
        'selector-class-pattern':
          '^([a-zA-Z0-9]+)(?:-[a-zA-Z0-9]+)*(?:__([a-zA-Z0-9]+))*$',
      },
    },
  ],
}
