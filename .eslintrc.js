module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  extends: ['google', 'plugin:jest/recommended', 'prettier'],
  plugins: ['jest', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'require-jsdoc': 'off',
    'prettier/prettier': ['error'],
  },
};
