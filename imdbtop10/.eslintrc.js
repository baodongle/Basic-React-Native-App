module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'prettier/prettier': ['error', { 'trailingComma': 'es5', 'singleQuote': true, 'printWidth': 100 }],
    'react/prefer-stateless-function': [0],
    'no-use-before-define': ['error', { 'variables': false }],
  },
  plugins: [
    'prettier',
    'react',
    'react-native',
  ],
};
