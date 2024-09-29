module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'dist/**/*', 'node_modules/**/*'],
  rules: {
    // Customize rules to fit your project's needs
    '@typescript-eslint/no-unused-vars': 'warn', // Warn on unused variables
    '@typescript-eslint/explicit-function-return-type': 'off', // Disable explicit return types
    '@typescript-eslint/no-explicit-any': 'warn', // Warn on using `any` type
    'prettier/prettier': ['error', { endOfLine: 'auto' }], // Prettier integration
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
      },
    ], // Ensure a clean import order
  },
};