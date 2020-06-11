module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react'],
  globals: {
    graphql: false,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: '2017',
  },
  parser: 'babel-eslint',
  extends: ['standard', 'standard-react', 'prettier'],
  rules: {
    'import/no-unresolved': [2, { commonjs: true }],
    'react/jsx-pascal-case': [2, { allowAllCaps: true }],
  },
}
