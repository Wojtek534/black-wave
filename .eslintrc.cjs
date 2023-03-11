/* eslint-disable no-undef */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
      project: true,
      tsconfigRootDir: "./tsconfig.json",
    },
    rules: {
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
      "@typescript-eslint/explicit-function-return-type": [
      "error",
        {
        "allowExpressions": true
        }
      ]
    },
    root: true,
  };