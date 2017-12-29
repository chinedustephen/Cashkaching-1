module.exports = {
  extends: "airbnb",
  plugins: ["react", "import", "jsx-a11y"],
  rules: {
    "react/jsx-filename-extension": 0,
    quotes: 0
  },
  globals: {
    document: 1
  },
  parserOptions: {
    sourceType: "module"
  }
};
