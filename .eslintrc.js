module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "ignorePatterns": [
    "dist"
  ],
  "rules": {
    "no-console": 2,
  }
};
