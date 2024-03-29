const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/js/index.js',
    page: './src/page.jsx',
    game_note: './src/js/game_note.js',
    games: './src/js/games.js',
    about: './src/js/about.js',
    article: './src/js/article.js',
    fiveseven_minutes: './src/js/fiveseven_minutes.js',
    mailer: './src/js/mailer.js',
    header: './src/js/header.js',
    footer: './src/js/footer.js',
    console: './src/js/console.js',
    gamehistory: './src/js/gamehistory.js',
    studios: './src/js/studios.js',
    five_minutes: './src/js/five_minutes.js',
    over_seven_minutes: './src/js/over_seven_minutes.js',
    authors: './src/js/authors.js',
    article_second: './src/js/article_second.js',
    article_third: './src/js/article_third.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/fiveseven_minutes.html',
      filename: './fiveseven_minutes.html',
      chunks: ['fiveseven_minutes']
    }),
    new HtmlWebpackPlugin({ 
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/about.html',
      filename: './about.html',
      chunks: ['about']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/games.html',
      filename: './games.html',
      chunks: ['games']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/gamehistory.html',
      filename: './gamehistory.html',
      chunks: ['gamehistory']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/console.html',
      filename: './console.html',
      chunks: ['console']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/studios.html',
      filename: './studios.html',
      chunks: ['studios']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/article.html',
      filename: './article.html',
      chunks: ['article']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/authors.html',
      filename: './authors.html',
      chunks: ['authors']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/game_note.html',
      filename: './game_note.html',
      chunks: ['game_note']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/mailer.html',
      filename: './mailer.html',
      chunks: ['mailer']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/fiveseven_minutes.html',
      filename: './fiveseven_minutes.html',
      chunks: ['fiveseven_minutes']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/five_minutes.html',
      filename: './five_minutes.html',
      chunks: ['five_minutes']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/over_seven_minutes.html',
      filename: './over_seven_minutes.html',
      chunks: ['over_seven_minutes']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/article_second.html',
      filename: './article_second.html',
      chunks: ['article_second']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/article_third.html',
      filename: './article_third.html',
      chunks: ['article_third']
    }),

    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/reach-us.html',
      filename: './reach-us.html',
      chunks: ['reach-us']
    }),

    // Internal pages
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/page.html',
      filename: './pages/page.html',
      chunks: ['page']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
