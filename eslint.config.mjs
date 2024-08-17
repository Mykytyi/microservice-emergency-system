import globals from "globals";
import pluginJs from "@eslint/js";
import ts from "typescript-eslint";


export default [
  pluginJs.configs.recommended,
  ...ts.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser,
    }
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    rules: {
      "semi": "error",
      "prefer-const": "error",
    }
  },
  {
    ignores: ["dist/*"]
  }
];
