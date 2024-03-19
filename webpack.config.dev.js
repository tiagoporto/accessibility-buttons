const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin
const enResources = require('./src/website/locales/en/app.json')

const stylusLoaderConfig = {
  loader: 'stylus-loader',
  options: {
    'include css': true,
    sourceMap: true,
    import: [
      path.resolve(__dirname, './node_modules/jeet/styl/index.styl'),
      // path.resolve(__dirname, './src/site/styles/helpers/index.styl'),
    ],
  },
}

const postCSSLoaderConfig = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    plugins: () => [
      require('postcss-preset-env')({
        stage: 3,
      }),
      require('postcss-combine-media-query')(),
    ],
  },
}

module.exports = {
  mode: 'development',
  entry: {
    index: './src/website/index.ts',
  },
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'src/website/public'),
    },
    open: true,
    host: '0.0.0.0',
    client: {
      overlay: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
      },
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            // options: {
            //   importLoaders: 2,
            //   modules: {
            //     localIdentName: '[local]--[hash:base64:7]',
            //   },
            //   esModule: true,
            //   sourceMap: true
            // },
          },
          postCSSLoaderConfig,
          stylusLoaderConfig,
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          postCSSLoaderConfig,
        ],
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/,
      //   loader: 'file-loader',
      // },
      {
        test: /\.json$/,
        include: [path.resolve(__dirname, 'src/site/locales/en/')],
        use: ['json-map-keys-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.vue'],
    alias: {
      '@i18n': path.join(__dirname, './src/website/locales/en'),
      '@i18nResources': path.join(__dirname, './src/website/locales'),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      favicon: './src/website/public/favicon.ico',
      template: './src/website/index.ejs',
      meta: {
        description: enResources.app.description,
        keywords: enResources.app.keywords,
      },
      templateParameters: {
        title: enResources.app.title,
        lang: 'en',
        appName: enResources.app.name,
      },
    }),
  ],
}
