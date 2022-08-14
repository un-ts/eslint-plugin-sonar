# eslint-plugin-sonar

[ESLint](https://github.com/eslint/eslint) rules extracted from [SonarJS](https://github.com/SonarSource/SonarJS)

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/rx-ts/eslint-plugin-sonar/Publish%20package)](https://github.com/rx-ts/eslint-plugin-sonar/actions?query=workflow%3A%22Publish+package%22)
[![Codacy Grade](https://img.shields.io/codacy/grade/a4c5a34005074f5eaf80a98854bfa8f5)](https://app.codacy.com/gh/rx-ts/eslint-plugin-sonar)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Frx-ts%2Feslint-plugin-sonar%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
[![npm](https://img.shields.io/npm/v/eslint-plugin-sonar.svg)](https://www.npmjs.com/package/eslint-plugin-sonar)
[![GitHub release](https://img.shields.io/github/release/rx-ts/eslint-plugin-sonar)](https://github.com/rx-ts/eslint-plugin-sonar/releases)

[![David Peer](https://img.shields.io/david/peer/rx-ts/eslint-plugin-sonar.svg)](https://david-dm.org/rx-ts/eslint-plugin-sonar?type=peer)
[![David](https://img.shields.io/david/rx-ts/eslint-plugin-sonar.svg)](https://david-dm.org/rx-ts/eslint-plugin-sonar)
[![David Dev](https://img.shields.io/david/dev/rx-ts/eslint-plugin-sonar.svg)](https://david-dm.org/rx-ts/eslint-plugin-sonar?type=dev)

[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## TOC <!-- omit in toc -->

- [Usage](#usage)
  - [Install](#install)
  - [Enable rules manually](#enable-rules-manually)
  - [Extends configs](#extends-configs)
- [Rule list](#rule-list)
- [Changelog](#changelog)
- [License](#license)

## Usage

### Install

```sh
# yarn
yarn add -D eslint-plugin-sonar

# npm
npm install -D eslint-plugin-sonar
```

### Enable rules manually

```jsonc
// .eslintrc
{
  "plugins": ["sonar"],
  "rules": {
    "sonar/deprecation": 1
  }
}
```

### Extends configs

```jsonc
{
  "extends": [
    // only one of the following is needed to be enabled
    "plugin:sonar/base",
    "plugin:sonar/recommended"
  ]
}
```

## Rule list

<!-- prefix placeholder -->

| rule name                                 | detail link |
| ----------------------------------------- | ----------- |
| `anchor-precedence`                       | N/A         |
| `argument-type`                           | N/A         |
| `arguments-order`                         | N/A         |
| `arguments-usage`                         | N/A         |
| `array-callback-without-return`           | N/A         |
| `array-constructor`                       | N/A         |
| `arrow-function-convention`               | N/A         |
| `assertions-in-tests`                     | N/A         |
| `aws-s3-bucket-granted-access`            | N/A         |
| `aws-s3-bucket-insecure-http`             | N/A         |
| `aws-s3-bucket-public-access`             | N/A         |
| `aws-s3-bucket-server-encryption`         | N/A         |
| `aws-s3-bucket-versioning`                | N/A         |
| `bitwise-operators`                       | N/A         |
| `bool-param-default`                      | N/A         |
| `call-argument-line`                      | N/A         |
| `certificate-transparency`                | N/A         |
| `chai-determinate-assertion`              | N/A         |
| `class-name`                              | N/A         |
| `class-prototype`                         | N/A         |
| `code-eval`                               | N/A         |
| `comma-or-logical-or-case`                | N/A         |
| `comment-regex`                           | N/A         |
| `concise-regex`                           | N/A         |
| `conditional-indentation`                 | N/A         |
| `confidential-information-logging`        | N/A         |
| `constructor-for-side-effects`            | N/A         |
| `content-length`                          | N/A         |
| `content-security-policy`                 | N/A         |
| `cookie-no-httponly`                      | N/A         |
| `cookies`                                 | N/A         |
| `cors`                                    | N/A         |
| `csrf`                                    | N/A         |
| `cyclomatic-complexity`                   | N/A         |
| `declarations-in-global-scope`            | N/A         |
| `deprecation`                             | N/A         |
| `destructuring-assignment-syntax`         | N/A         |
| `different-types-comparison`              | N/A         |
| `disabled-auto-escaping`                  | N/A         |
| `disabled-resource-integrity`             | N/A         |
| `disabled-timeout`                        | N/A         |
| `dns-prefetching`                         | N/A         |
| `duplicates-in-character-class`           | N/A         |
| `empty-string-repetition`                 | N/A         |
| `encryption`                              | N/A         |
| `encryption-secure-mode`                  | N/A         |
| `existing-groups`                         | N/A         |
| `expression-complexity`                   | N/A         |
| `file-header`                             | N/A         |
| `file-name-differ-from-class`             | N/A         |
| `file-permissions`                        | N/A         |
| `file-uploads`                            | N/A         |
| `fixme-tag`                               | N/A         |
| `for-in`                                  | N/A         |
| `for-loop-increment-sign`                 | N/A         |
| `frame-ancestors`                         | N/A         |
| `function-inside-loop`                    | N/A         |
| `function-name`                           | N/A         |
| `function-return-type`                    | N/A         |
| `future-reserved-words`                   | N/A         |
| `generator-without-yield`                 | N/A         |
| `hashing`                                 | N/A         |
| `hidden-files`                            | N/A         |
| `in-operator-type-error`                  | N/A         |
| `inconsistent-function-call`              | N/A         |
| `index-of-compare-to-positive-number`     | N/A         |
| `insecure-cookie`                         | N/A         |
| `insecure-jwt-token`                      | N/A         |
| `inverted-assertion-arguments`            | N/A         |
| `label-position`                          | N/A         |
| `link-with-target-blank`                  | N/A         |
| `max-union-size`                          | N/A         |
| `misplaced-loop-counter`                  | N/A         |
| `nested-control-flow`                     | N/A         |
| `new-operator-misuse`                     | N/A         |
| `no-accessor-field-mismatch`              | N/A         |
| `no-alphabetical-sort`                    | N/A         |
| `no-angular-bypass-sanitization`          | N/A         |
| `no-array-delete`                         | N/A         |
| `no-associative-arrays`                   | N/A         |
| `no-built-in-override`                    | N/A         |
| `no-case-label-in-switch`                 | N/A         |
| `no-clear-text-protocols`                 | N/A         |
| `no-code-after-done`                      | N/A         |
| `no-commented-code`                       | N/A         |
| `no-dead-store`                           | N/A         |
| `no-delete-var`                           | N/A         |
| `no-duplicate-in-composite`               | N/A         |
| `no-empty-after-reluctant`                | N/A         |
| `no-empty-alternatives`                   | N/A         |
| `no-empty-group`                          | N/A         |
| `no-equals-in-for-termination`            | N/A         |
| `no-exclusive-tests`                      | N/A         |
| `no-for-in-iterable`                      | N/A         |
| `no-function-declaration-in-block`        | N/A         |
| `no-global-this`                          | N/A         |
| `no-globals-shadowing`                    | N/A         |
| `no-hardcoded-credentials`                | N/A         |
| `no-hardcoded-ip`                         | N/A         |
| `no-hook-setter-in-body`                  | N/A         |
| `no-implicit-dependencies`                | N/A         |
| `no-implicit-global`                      | N/A         |
| `no-in-misuse`                            | N/A         |
| `no-incomplete-assertions`                | N/A         |
| `no-inconsistent-returns`                 | N/A         |
| `no-incorrect-string-concat`              | N/A         |
| `no-infinite-loop`                        | N/A         |
| `no-intrusive-permissions`                | N/A         |
| `no-invalid-await`                        | N/A         |
| `no-invariant-returns`                    | N/A         |
| `no-ip-forward`                           | N/A         |
| `no-labels`                               | N/A         |
| `no-mime-sniff`                           | N/A         |
| `no-misleading-array-reverse`             | N/A         |
| `no-mixed-content`                        | N/A         |
| `no-nested-assignment`                    | N/A         |
| `no-nested-conditional`                   | N/A         |
| `no-nested-incdec`                        | N/A         |
| `no-new-symbol`                           | N/A         |
| `no-os-command-from-path`                 | N/A         |
| `no-parameter-reassignment`               | N/A         |
| `no-primitive-wrappers`                   | N/A         |
| `no-redundant-assignments`                | N/A         |
| `no-redundant-optional`                   | N/A         |
| `no-redundant-parentheses`                | N/A         |
| `no-reference-error`                      | N/A         |
| `no-referrer-policy`                      | N/A         |
| `no-require-or-define`                    | N/A         |
| `no-return-type-any`                      | N/A         |
| `no-same-argument-assert`                 | N/A         |
| `no-tab`                                  | N/A         |
| `no-try-promise`                          | N/A         |
| `no-undefined-argument`                   | N/A         |
| `no-undefined-assignment`                 | N/A         |
| `no-unenclosed-multiline-block`           | N/A         |
| `no-unsafe-unzip`                         | N/A         |
| `no-unthrown-error`                       | N/A         |
| `no-unused-function-argument`             | N/A         |
| `no-useless-increment`                    | N/A         |
| `no-useless-intersection`                 | N/A         |
| `no-useless-react-setstate`               | N/A         |
| `no-variable-usage-before-declaration`    | N/A         |
| `no-vue-bypass-sanitization`              | N/A         |
| `no-weak-cipher`                          | N/A         |
| `no-weak-keys`                            | N/A         |
| `no-wildcard-import`                      | N/A         |
| `non-number-in-arithmetic-expression`     | N/A         |
| `null-dereference`                        | N/A         |
| `operation-returning-nan`                 | N/A         |
| `os-command`                              | N/A         |
| `post-message`                            | N/A         |
| `prefer-default-last`                     | N/A         |
| `prefer-promise-shorthand`                | N/A         |
| `prefer-type-guard`                       | N/A         |
| `process-argv`                            | N/A         |
| `production-debug`                        | N/A         |
| `pseudo-random`                           | N/A         |
| `publicly-writable-directories`           | N/A         |
| `regex-complexity`                        | N/A         |
| `regular-expr`                            | N/A         |
| `rules-of-hooks`                          | N/A         |
| `session-regeneration`                    | N/A         |
| `shorthand-property-grouping`             | N/A         |
| `single-char-in-character-classes`        | N/A         |
| `single-character-alternation`            | N/A         |
| `slow-regex`                              | N/A         |
| `sockets`                                 | N/A         |
| `sonar-block-scoped-var`                  | N/A         |
| `sonar-jsx-no-leaked-render`              | N/A         |
| `sonar-max-lines`                         | N/A         |
| `sonar-max-lines-per-function`            | N/A         |
| `sonar-no-control-regex`                  | N/A         |
| `sonar-no-dupe-keys`                      | N/A         |
| `sonar-no-fallthrough`                    | N/A         |
| `sonar-no-invalid-regexp`                 | N/A         |
| `sonar-no-misleading-character-class`     | N/A         |
| `sonar-no-regex-spaces`                   | N/A         |
| `sonar-no-unused-class-component-methods` | N/A         |
| `sonar-no-unused-vars`                    | N/A         |
| `sql-queries`                             | N/A         |
| `standard-input`                          | N/A         |
| `stateful-regex`                          | N/A         |
| `strict-transport-security`               | N/A         |
| `strings-comparison`                      | N/A         |
| `super-invocation`                        | N/A         |
| `switch-without-default`                  | N/A         |
| `test-check-exception`                    | N/A         |
| `todo-tag`                                | N/A         |
| `too-many-break-or-continue-in-loop`      | N/A         |
| `unicode-aware-regex`                     | N/A         |
| `unused-import`                           | N/A         |
| `unused-named-groups`                     | N/A         |
| `unverified-certificate`                  | N/A         |
| `unverified-hostname`                     | N/A         |
| `updated-const-var`                       | N/A         |
| `updated-loop-counter`                    | N/A         |
| `use-type-alias`                          | N/A         |
| `useless-string-operation`                | N/A         |
| `values-not-convertible-to-numbers`       | N/A         |
| `variable-name`                           | N/A         |
| `void-use`                                | N/A         |
| `weak-ssl`                                | N/A         |
| `web-sql-database`                        | N/A         |
| `x-powered-by`                            | N/A         |
| `xml-parser-xxe`                          | N/A         |
| `xpath`                                   | N/A         |

<!-- suffix placeholder -->

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](https://github.com/rx-ts/eslint-plugin-sonar/blob/HEAD/eslint-plugin-sonar/CHANGELOG.md).

## License

[MIT][] © [JounQin][]@[1stG.me][]

[1stg.me]: https://www.1stg.me
[jounqin]: https://GitHub.com/JounQin
[mit]: http://opensource.org/licenses/MIT
