import { ruleTester } from './util'

import { deprecation } from 'eslint-plugin-sonar'

const ruleName = 'deprecation'

ruleTester.run(ruleName, deprecation, {
  valid: [ruleName],
  invalid: [
    {
      code: ruleName,
      errors: ["'A' is deprecated. Please do not use this class any more"],
    },
  ],
})
