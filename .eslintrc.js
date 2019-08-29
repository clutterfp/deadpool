module.exports = {
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
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect'
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' }
    ],
    linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }]
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/standard',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  plugins: [
    'standard',
    '@typescript-eslint',
    'react',
    'react-hooks',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error'
  }
};
