module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // required to lint *.vue files
  plugins: [
    'vue',
  ],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  // add your custom rules here
  rules: {},
  settings: {
    'import/resolver': {
      webpack: {
        config: require.resolve('@vue/cli-service/webpack.config.js'),
      },
    },
  },
};
