module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:i18next/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "i18next"],
  rules: {
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    indent: [2, 2],
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-unused-vars": "warn",
    "object-curly-newline": "off",
    quotes: [2, "double", { avoidEscape: true }],
    "react/function-component-definition": "off",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-props-no-spreading": "warn",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "i18next/no-literal-string": [
      "error",
      { markupOnly: true, ignoreAttribute: ["to", "data-testid"] },
    ],
    "max-len": ["error", { ignoreComments: true }],
  },
  globals: {
    __IS_DEV__: true,
  },
};
