module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/recommended",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018
  },
  rules: {
    indent: ["error", "tab"],
    "vue/html-indent": ["error", "tab"],
    quotes: ["error", "double"],
    "quote-props": ["error", "as-needed"]
  }
}
