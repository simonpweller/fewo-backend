module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    'node': true,
  },
  rules: {
    'comma-dangle': ['warn', 'always-multiline'],
    'no-unused-vars': [
      'error', {
        'vars': 'all',
        'args': 'after-used',
        'ignoreRestSiblings': false,
        'argsIgnorePattern': '^next$',
      }],
  }
}