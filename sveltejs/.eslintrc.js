// http://eslint.org/docs/user-guide/configuring

module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  // add your custom rules here
  'rules': {
    'indent': ["error", 2],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
