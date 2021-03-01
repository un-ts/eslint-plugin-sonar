import { Rule } from 'eslint'

import * as _rules from './rules'
import { kebabCase } from './utils'

export * from './rules'
export * from './utils'

export const rules = Object.entries(_rules).reduce<
  Record<string, Rule.RuleModule>
>(
  (acc, [name, rule]) =>
    Object.assign(acc, {
      [kebabCase(name)]: rule,
    }),
  {},
)
