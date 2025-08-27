export default {
  env: {
    test: {
      presets: [
        '@babel/preset-env',
        ['@babel/preset-typescript', { allowDeclareFields: true }],
      ],
    },
  },
}
