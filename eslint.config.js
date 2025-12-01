// eslint.config.js — Flat Config für ESLint 9 (Node + TS + Prettier)
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'

export default [
  // Ordner/Dateien ignorieren
  { ignores: ['dist/**', 'node_modules/**', '**/*.js', '**/*.cjs', '**/*.mjs'] },

  // (Optional) JS-Regeln weglassen, weil wir TS nutzen
  // js.configs.recommended,

  // TypeScript-Empfehlungen (Flat-Config von typescript-eslint)
  ...tseslint.configs.recommended,

  // Prettier als ESLint-Regel (zeigt Format-Abweichungen an)
  {
    plugins: { prettier },
    rules: { 
      'prettier/prettier': 'warn',
       // besser any vermeiden: "@typescript-eslint/no-explicit-any": "off"
    }
  },

  // Node-Umgebung (statt Browser)
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.node }
    }
  }
]
