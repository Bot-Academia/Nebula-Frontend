module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'only-warn'
  ],
  // add your custom rules here
  rules: {
    'no-underscore-dangle': 'off',
    'linebreak-style': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off'
  }
}
