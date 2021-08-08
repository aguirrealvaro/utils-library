module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-hooks"],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "no-console": 1,
    "@typescript-eslint/no-var-requires": 1,
    "prettier/prettier": 2,
    "react/prop-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    jest: true,
  },
};
