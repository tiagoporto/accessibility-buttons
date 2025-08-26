import { defineConfig } from '@rspack/cli'
import { rspack } from '@rspack/core'

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ['last 2 versions', '> 0.2%', 'not dead', 'Firefox ESR']

export default defineConfig({
  entry: {
    main: './tests/app/index.ts',
  },
  resolve: {
    extensions: ['...', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset',
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'ecmascript',
                },
              },
              env: { targets },
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                },
              },
              env: { targets },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './tests/app/index.html',
    }),
  ],
  experiments: {
    css: true,
  },
})
