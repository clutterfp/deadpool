'use strict';

const CLIEngine = require('eslint').CLIEngine;

const cli = new CLIEngine({
  baseConfig: {
    extends: [
      'standard',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'prettier',
      'prettier/standard',
      'prettier/@typescript-eslint',
      'prettier/react'
    ]
  },
  useEslintrc: false
});

const rules = cli.getConfigForFile().rules; // 抽离ts需要的extends信息

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'prettier',
    'prettier/standard',
    'prettier/react'
  ],
  plugins: ['standard', 'react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error'
  },

  // ts settings
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      env: {
        browser: true,
        es6: true,
        node: true
      },
      settings: {
        react: {
          version: 'detect'
        }
      },
      plugins: [
        'standard',
        '@typescript-eslint',
        'react',
        'react-hooks',
        'prettier'
      ],
      rules: {
        ...rules,
        'prettier/prettier': 'error'
      }
    }
  ]
};
