import fs from 'fs'

import { Rule, RuleTester as _RuleTester } from 'eslint'

export const readFixture = (fixture: string, valid = false) =>
  fs
    .readFileSync(
      require.resolve(`./fixtures/${fixture}.${valid ? 'valid' : 'invalid'}`),
    )
    .toString('utf-8')

export type Arrayable<T> = T | T[]

// eslint-disable-next-line @typescript-eslint/no-type-alias
export type NonNullable<T> = T extends null | undefined ? never : T

export const arrayify = <
  T,
  R = T extends Array<infer S> ? NonNullable<S> : NonNullable<T>
>(
  ...args: T[]
) =>
  args.reduce<R[]>((arr, curr) => {
    arr.push(...(Array.isArray(curr) ? curr : curr == null ? [curr] : []))
    return arr
  }, [])

export class RuleTester extends _RuleTester {
  run(
    name: string,
    rule: Rule.RuleModule,
    tests: {
      valid?: Arrayable<string | _RuleTester.ValidTestCase> | undefined
      invalid?: Arrayable<_RuleTester.InvalidTestCase> | undefined
    },
  ) {
    return super.run(name, rule, {
      valid: arrayify(tests.valid).map(testCase =>
        typeof testCase === 'string'
          ? readFixture(testCase, true)
          : {
              ...testCase,
              code: readFixture(testCase.code, true),
            },
      ),
      invalid: arrayify(tests.invalid).map(testCase => ({
        ...testCase,
        code: readFixture(testCase.code),
        filename: testCase.filename || testCase.code + '.ts',
      })),
    })
  }
}

export const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
})
