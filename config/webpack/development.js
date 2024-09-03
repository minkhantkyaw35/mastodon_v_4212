const { resolve } = require('path');

const { merge } = require('webpack-merge');

const { settings, output } = require('./configuration');
const sharedConfig = require('./shared');

const watchOptions = {};

if (process.env.VAGRANT) {
  watchOptions.poll = 1000;
}

const customConfig = {
  resolve: {
    alias: {
      //'collections': resolve('/Users/macbookpro/workplace/patchwork/community_gem/app/javascript/mastodon/features/collections/index.jsx'),
      // './actions/collections': resolve('/Users/macbookpro/workplace/patchwork/community_gem/app/javascript/mastodon/actions/collections.js'),
      //'mastodon/components/column_link': resolve('/Users/zinmoe/Projects/Newsmast/Patchwork/mastodon_official/app/javascript/mastodon/features/ui/components/column_link')
    },
    extensions: ['.js', '.jsx'] // Ensure Webpack resolves .jsx files
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};

module.exports = merge(sharedConfig, {
  mode: 'development',
  cache: true,
  devtool: 'cheap-module-eval-source-map',

  stats: {
    errorDetails: true,
  },

  output: {
    pathinfo: true,
  },

  devServer: {
    clientLogLevel: 'none',
    compress: settings.dev_server.compress,
    quiet: settings.dev_server.quiet,
    disableHostCheck: settings.dev_server.disable_host_check,
    host: settings.dev_server.host,
    port: settings.dev_server.port,
    https: settings.dev_server.https,
    hot: settings.dev_server.hmr,
    contentBase: output.path,
    inline: settings.dev_server.inline,
    useLocalIp: settings.dev_server.use_local_ip,
    public: settings.dev_server.public,
    publicPath: output.publicPath,
    historyApiFallback: {
      disableDotRule: true,
    },
    headers: settings.dev_server.headers,
    overlay: settings.dev_server.overlay,
    stats: {
      entrypoints: false,
      errorDetails: false,
      modules: false,
      moduleTrace: false,
    },
    watchOptions: Object.assign(
      {},
      settings.dev_server.watch_options,
      watchOptions,
    ),
    writeToDisk: filePath => /ocr/.test(filePath),
  },
});