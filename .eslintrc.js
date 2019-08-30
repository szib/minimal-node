module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: ['eslint:recommended', 'google'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [],
  rules: {},
  overrides: [
    {
      files: ['**/*.test.js', '**/*.spec.js', 'test/**/*.js'],
      env: {
        mocha: true
      },
      plugins: ['mocha'],
      rules: {
        'mocha/no-exclusive-tests': 'error',
        'mocha/no-pending-tests': 'error'
      }
    }
  ]
};
