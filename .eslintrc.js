// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  extends: ['prettier', 'eslint:recommended'],
  env: {
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'no-alert': 0,
    'no-param-reassign': [2, { props: false }],
    'no-plusplus': 0,
    'no-iterator': 0,
    'no-restricted-syntax': [2, 'WithStatement'],
    'no-var': 'error',
    'func-style': 0,
    'no-unused-vars': 'warn',
    'prettier/prettier': 'error',
  },
};
