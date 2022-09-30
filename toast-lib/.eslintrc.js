module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx'] },
    ],
    'import/no-unresolved': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-boolean-value': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'import/extensions': 'off',
  },
}
