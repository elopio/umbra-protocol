module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },

  env: {
    browser: true,
    mocha: true,
  },

  extends: [
    'airbnb-base',
    'plugin:chai-friendly/recommended',
  ],

  plugins: [
    'chai-friendly',
  ],

  globals: {
    'ga': true, // Google Analytics
    'cordova': true,
    '__statics': true,
    'process': true,
    'Capacitor': true,
    'chrome': true
  },

  // add your custom rules here
  rules: {
    'no-param-reassign': 'off',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'prefer-promise-reject-errors': 'off',

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // Max line length of 100 characters, except for lines with comments or strings
    'max-len': ['error', {
      code: 100, ignoreComments: true, ignoreTrailingComments: true, ignoreStrings: true,
    }],
  }
}
