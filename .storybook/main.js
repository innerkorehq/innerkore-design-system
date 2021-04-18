const path = require('path');
const { getThemeVariables } = require('antd/dist/theme');

module.exports = {
  stories: ['../src/stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
  ],
  webpackFinal: async config => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              presets: [require.resolve("babel-preset-react-app")]
            }
          },
          require.resolve("react-docgen-typescript-loader")
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'less-loader', // compiles Less to CSS
         options: {
           lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
             modifyVars: {
               'primary-color': '#eaeaea',
               'link-color': '#1DA57A',
               'border-radius-base': '2px',
             },
             javascriptEnabled: true,
           },
         },
        }]
      }
    ]

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};