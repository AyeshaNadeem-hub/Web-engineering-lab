export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        document: "readonly",
        module: "readonly",
        require: "readonly",
      },
    },
  },
];
