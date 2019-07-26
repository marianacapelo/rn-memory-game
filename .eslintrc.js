module.exports = {
  parser: 'babel-eslint',
  env: {
    'react-native/react-native': true
  },
  plugins: ['react', 'react-native'],
  ecmaFeatures: {
    jsx: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    // overrides
    'react/display-name': 0,
    'no-console': 'off',
    'react/prop-types': 0
  }
}
