import type { Linter } from 'eslint'

export const base: Linter.Config = {
  plugins: ['sonar'],
  rules: {
    'no-labels': 0,
    'sonar/argument-type': 2,
    'sonar/arguments-order': 2,
    'sonar/array-callback-without-return': 2,
    'sonar/bitwise-operators': 2,
    'sonar/call-argument-line': 2,
    'sonar/comma-or-logical-or-case': 2,
    'sonar/code-eval': 2,
    'sonar/deprecation': 1,
    'sonar/different-types-comparison': 2,
    'sonar/for-in': 2,
    'sonar/for-loop-increment-sign': 2,
    'sonar/function-inside-loop': 2,
    'sonar/future-reserved-words': 1,
    'sonar/generator-without-yield': 2,
    'sonar/in-operator-type-error': 2,
    'sonar/inconsistent-function-call': 2,
    'sonar/label-position': 2,
    'sonar/new-operator-misuse': [2, { considerJSDoc: false }],
    'sonar/no-accessor-field-mismatch': 2,
    'sonar/no-alphabetical-sort': 2,
    'sonar/no-array-delete': 2,
    'sonar/no-associative-arrays': 2,
    // https://community.sonarsource.com/t/incorrect-no-built-in-override-report-from-imports/40053
    // 'sonar/no-built-in-override': 2,
    'sonar/no-case-label-in-switch': 2,
    'sonar/no-dead-store': 2,
    'sonar/no-delete-var': 2,
    'sonar/no-duplicate-in-composite': 2,
    'sonar/no-equals-in-for-termination': 1,
    'sonar/no-function-declaration-in-block': 1,
    'sonar/no-global-this': 1,
    'sonar/no-globals-shadowing': 1,
    'sonar/no-implicit-global': 2,
    'sonar/no-in-misuse': 2,
    'sonar/no-infinite-loop': 2,
    'sonar/no-invalid-await': 2,
    'sonar/no-labels': 1,
    // 'sonar/no-misleading-array-reverse': 1,
    'sonar/no-parameter-reassignment': 1,
    'sonar/no-primitive-wrappers': 1,
    'sonar/no-redundant-assignments': 1,
    'sonar/no-redundant-optional': 1,
    'sonar/no-try-promise': 2,
    'sonar/no-undefined-argument': 1,
    'sonar/no-unthrown-error': 2,
    'sonar/no-useless-increment': 2,
    'sonar/operation-returning-nan': 2,
    'sonar/post-message': 1,
    'sonar/sonar-block-scoped-var': 1,
    'sonar/sonar-no-fallthrough': 1,
    'sonar/sonar-no-unused-vars': 2,
    'sonar/strings-comparison': 2,
    'sonar/super-invocation': 2,
    'sonar/unused-import': 2,
    'sonar/updated-loop-counter': 1,
    'sonar/useless-string-operation': 2,
    'sonar/values-not-convertible-to-numbers': 1,
  },
  overrides: [
    {
      files: '*.{ts,tsx}',
      rules: {
        'sonar/argument-type': 0,
        'sonar/arguments-order': 0,
        'sonar/array-callback-without-return': 0,
        'sonar/call-argument-line': 0,
        'sonar/different-types-comparison': 0,
        'sonar/inconsistent-function-call': 0,
        'sonar/new-operator-misuse': 0,
        'sonar/no-associative-arrays': 0,
        'sonar/no-gratuitous-expressions': 0,
        'sonar/no-implicit-global': 0,
        'sonar/no-invalid-await': 0,
        'sonar/no-primitive-wrappers': 0,
        'sonar/operation-returning-nan': 0,
        'sonar/sonar-block-scoped-var': 0,
        'sonar/sonar-no-fallthrough': 0,
        'sonar/sonar-no-unused-vars': 0,
        'sonar/strings-comparison': 0,
        'sonar/super-invocation': 0,
        'sonar/unused-import': 0,
        'sonar/values-not-convertible-to-numbers': 0,
      },
    },
  ],
}

export const recommended: Linter.Config = {
  ...base,
  rules: {
    ...base.rules,
    'sonar/array-constructor': 2,
    'sonar/class-prototype': 2,
    'sonar/destructuring-assignment-syntax': 2,
    'sonar/function-name': [2, { format: '^_?[a-zA-Z][a-zA-Z0-9]*\\$?$' }],
    'sonar/future-reserved-words': 2,
    'sonar/max-union-size': [1, 5],
    'sonar/misplaced-loop-counter': 2,
    'sonar/no-equals-in-for-termination': 2,
    'sonar/no-for-in-iterable': 2,
    'sonar/no-labels': 2,
    // https://jira.sonarsource.com/browse/RSPEC-4043?focusedCommentId=245770&page=com.atlassian.jira.plugin.system.issuetabpanels%3Acomment-tabpanel#comment-245770
    // 'sonar/no-misleading-array-reverse': 2,
    'sonar/no-parameter-reassignment': 2,
    'sonar/no-primitive-wrappers': 2,
    'sonar/no-redundant-assignments': 2,
    'sonar/no-redundant-optional': 2,
    'sonar/no-return-type-any': 1,
    'sonar/no-undefined-argument': 2,
    'sonar/no-unused-function-argument': 1,
    'sonar/no-useless-intersection': 2,
    'sonar/no-variable-usage-before-declaration': 2,
    'sonar/non-number-in-arithmetic-expression': 1,
    'sonar/null-dereference': 2,
    'sonar/prefer-default-last': 1,
    'sonar/prefer-promise-shorthand': 2,
    'sonar/sonar-block-scoped-var': 2,
    'sonar/sonar-no-fallthrough': 2,
    'sonar/updated-loop-counter': 2,
    'sonar/values-not-convertible-to-numbers': 2,
  },
  overrides: [
    ...base.overrides!,
    {
      files: '*.{ts,tsx}',
      rules: {
        'sonar/array-constructor': 0,
        // doesn't work with constructor with accessibility
        'sonar/no-unused-function-argument': 0,
        'sonar/class-prototype': 0,
        'sonar/no-for-in-iterable': 0,
        'sonar/no-variable-usage-before-declaration': 0,
        'sonar/non-number-in-arithmetic-expression': 0,
        'sonar/null-dereference': 0,
        'sonar/sonar-block-scoped-var': 0,
      },
    },
  ],
}
