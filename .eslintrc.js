module.exports = {
  extends: "airbnb",
  plugins: ["react", "import", "jsx-a11y"],
  rules: {
    "react/jsx-filename-extension": 0,
    quotes: 0,
    "react/prop-types": 0,
    "comma-dangle": 0,
    "object-curly-newline": 0,
    "arrow-parens": 0,
    "function-paren-newline": 0,
    "max-len": 0,
    "quote-props": 0,
    "no-tabs": 0,
    "react/jsx-indent": 0
  },
  globals: {
    document: 1
  },
  parserOptions: {
    sourceType: "module"
  }
};
