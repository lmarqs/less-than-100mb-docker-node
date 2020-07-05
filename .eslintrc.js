/* eslint "sort-keys-fix/sort-keys-fix": "error" */

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'sort-keys-fix',
  ],
  root: true,
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', {
      args: 'none',
      ignoreRestSiblings: false,
      vars: 'all',
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    'import/extensions': ['error', 'never'],
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
    'indent': ['error', 2],
    'jsx-a11y/label-has-associated-control': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
    'linebreak-style': ['error', 'unix'],
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxBOF: 0,
      maxEOF: 1,
    }],
    'no-trailing-spaces': ['error'],
    'no-unused-vars': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single'],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 'off',
    'semi': ['error', 'always'],
    'unicode-bom': ['error', 'never'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
