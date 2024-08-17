import globals from "globals";
import pluginJs from "@eslint/js";
import ts from "typescript-eslint";


export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    rules: {
      "semi": "error",
      "prefer-const": "error",
      "quotes": ['error', 'single'], // Использование одинарных кавычек
    }
  },
  {
    languageOptions: {
      globals: globals.browser,
    }
  },
  pluginJs.configs.recommended,
  ...ts.configs.recommended,
];
