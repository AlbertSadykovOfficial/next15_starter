import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  // ...compat.extends("next/core-web-vitals", "next/typescript", "plugin:prettier/recommended"),
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "plugin:prettier/recommended"],
    rules: {
      // Typescript и EsLint чуть по-раному настроены
      // Для файла /src/hooks/useInput.ts
      '@typescript-eslint/no-explicit-any': 'off'
    },
  }),
];

export default eslintConfig;
