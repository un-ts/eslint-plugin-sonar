import baseParser from '@babel/eslint-parser'
import tsParser from '@typescript-eslint/parser'
import { defineFlatConfig } from 'eslint-define-config'
import * as sonar from 'eslint-plugin-sonar'
import globals from 'globals'

import js from '@eslint/js'

export default defineFlatConfig([
  {
    ignores: [
      'coverage',
      '**/lib',
      'node_modules',
      'SonarJS',
      '**/test.*',
      '**/test/fixtures',
      'CHANGELOG.md',
      '!.github',
      '!.*.js',
    ],
  },
  {
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 'latest',
      parser: baseParser,
      sourceType: 'module',
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          plugins: ['@babel/syntax-import-attributes'],
        },
      },
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
  },
  {
    ...js.configs.recommended,
  },
  ...sonar.configs.flatRecommended,
])
