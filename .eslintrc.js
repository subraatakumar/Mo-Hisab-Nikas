module.exports = {
  root: true,
  env: {
    'jest/globals': true, // Ensure Jest globals are recognized
  },
  extends: [
    '@react-native',
    'prettier',
    'plugin:sonarjs/recommended-legacy', // Enables SonarJS rules. -legacy for eslint 8 not required for eslint 9
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'sonarjs', 'jest', 'import'],
  ignorePatterns: ['node_modules/', 'dist/', 'build/', 'android/', 'ios/'], // Exclude folders
  rules: {
    'sonarjs/cognitive-complexity': ['warn', 10], // Adjust 10 based on project needs
    'sonarjs/no-collapsible-if': 'warn', // Prevents nested if statements that can be merged
    'sonarjs/no-duplicate-string': ['warn', {threshold: 3}], // Helps replace repeated strings with constants
    'sonarjs/no-identical-functions': 'warn', // Finds duplicate functions in your codebase
    'sonarjs/no-redundant-boolean': 'warn', // Detects unnecessary boolean expressions
    'sonarjs/no-unused-collection': 'warn', // Detects arrays/objects that are modified but never used
    'sonarjs/no-inverted-boolean-check': 'warn', // Detects unnecessary else statements
    'sonarjs/no-gratuitous-expressions': 'warn', // Prevents unnecessary expressions
    'sonarjs/prefer-single-boolean-return': 'warn', // Simplifies boolean return statements
    'react/jsx-filename-extension': [
      'error',
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'react/jsx-props-no-spreading': 'off', // Allow prop spreading for RN components
    '@typescript-eslint/no-shadow': ['error'], // Prevent variable shadowing
    'import/extensions': [
      'error',
      'ignorePackages',
      {js: 'never', jsx: 'never', ts: 'never', tsx: 'never'},
    ],
    'import/no-unresolved': 'error',
    'global-require': 'off', // Needed for images in RN
  },
  settings: {
    react: {version: 'detect'},
    'import/resolver': {
      typescript: {},
    },
  },
};
