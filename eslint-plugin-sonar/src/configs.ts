import type { Linter } from 'eslint'
import * as sonar from './plugin.js'

import {
  baseRules,
  baseTsRules,
  recommendedRules,
  recommendedTsRules,
} from './config-rules.js'

const tsPatterns = ['**/*.{cts,mts,ts,tsx}']

export const base: Linter.Config = {
  plugins: ['sonar'],
  rules: baseRules,
  overrides: [
    {
      files: tsPatterns,
      rules: baseTsRules,
    },
  ],
}

export const recommended: Linter.Config = {
  ...base,
  rules: recommendedRules,
  overrides: [
    ...base.overrides!,
    {
      files: tsPatterns,
      rules: recommendedTsRules,
    },
  ],
}

export const flatBase: Linter.FlatConfig[] = [
  {
    plugins: {
      sonar,
    },
    rules: baseRules,
  },
  {
    files: tsPatterns,
    plugins: {
      sonar,
    },
    rules: baseTsRules,
  },
]

export const flatRecommended: Linter.FlatConfig[] = [
  {
    plugins: {
      sonar,
    },
    rules: recommendedRules,
  },
  {
    files: tsPatterns,
    plugins: {
      sonar,
    },
    rules: recommendedTsRules,
  },
]
