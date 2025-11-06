// eslint.config.mjs
import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    ignores: ["dist/**", "build/**", "node_modules/**"],
    languageOptions: {
      parser: tsparser,
      sourceType: "module",
      ecmaVersion: "latest",
      globals: { ...globals.node, ...globals.browser }
    },
    plugins: {
      "@typescript-eslint": tseslint
    },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "@typescript-eslint/consistent-type-imports": "warn"
    }
  }
];
