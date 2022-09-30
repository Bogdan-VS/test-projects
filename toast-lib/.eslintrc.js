export default [
  {
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
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
      'react/jsx-filename-extension': [
        1,
        { extensions: ['.js', '.jsx'] },
      ],
    },
  },
]
