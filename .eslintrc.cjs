module.exports = {
  env: {
    browser: true,
  },
  plugins: ["@typescript-eslint"],
  overrides: [
        {
          files: ["index.ts"],
          parser: "@typescript-eslint/parser",
          parserOptions: {
            project: "./tsconfig.json",
            tsconfigRootDir: ".",
          },
          rules: {
            "@typescript-eslint/no-unnecessary-condition": "error",
          },
        }],
};
