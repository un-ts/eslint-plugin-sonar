# eslint-plugin-sonar

[ESLint](https://github.com/eslint/eslint) rules extracted from [SonarJS](https://github.com/SonarSource/SonarJS)

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/rx-ts/eslint-plugin-sonar/Publish%20package)](https://github.com/rx-ts/eslint-plugin-sonar/actions?query=workflow%3A%22Publish+package%22)
[![Codacy Grade](https://img.shields.io/codacy/grade/5c70cd4efc864eb3b344e32be9aecce8)](https://www.codacy.com/app/JounQin/eslint-plugin-sonar)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Frx-ts%2Ftslint-config-eslint%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
[![npm](https://img.shields.io/npm/v/eslint-plugin-sonar.svg)](https://www.npmjs.com/package/eslint-plugin-sonar)
[![GitHub release](https://img.shields.io/github/release/rx-ts/eslint-plugin-sonar)](https://github.com/rx-ts/eslint-plugin-sonar/releases)

[![David Peer](https://img.shields.io/david/peer/rx-ts/eslint-plugin-sonar.svg)](https://david-dm.org/rx-ts/eslint-plugin-sonar?type=peer)
[![David](https://img.shields.io/david/rx-ts/eslint-plugin-sonar.svg)](https://david-dm.org/rx-ts/eslint-plugin-sonar)
[![David Dev](https://img.shields.io/david/dev/rx-ts/eslint-plugin-sonar.svg)](https://david-dm.org/rx-ts/eslint-plugin-sonar?type=dev)

[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![codechecks.io](https://raw.githubusercontent.com/codechecks/docs/master/images/badges/badge-default.svg?sanitize=true)](https://codechecks.io)

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

| rule name                              | detail link                                       |
| -------------------------------------- | ------------------------------------------------- |
| `argument-type`                        | <https://jira.sonarsource.com/browse/RSPEC-3782>  |
| `arguments-order`                      | <https://jira.sonarsource.com/browse/RSPEC-2234>  |
| `arguments-usage`                      | <https://jira.sonarsource.com/browse/RSPEC-3513>  |
| `array-callback-without-return`        | <https://jira.sonarsource.com/browse/RSPEC-3796>  |
| `array-constructor`                    | N/A                                               |
| `arrow-function-convention`            | <https://jira.sonarsource.com/browse/RSPEC-3524>  |
| `bitwise-operators`                    | <https://jira.sonarsource.com/browse/RSPEC-1529>  |
| `bool-param-default`                   | <https://jira.sonarsource.com/browse/RSPEC-4798>  |
| `call-argument-line`                   | <https://jira.sonarsource.com/browse/RSPEC-1472>  |
| `certificate-transparency`             | <https://jira.sonarsource.com/browse/RSPEC-5742>  |
| `class-name`                           | <https://jira.sonarsource.com/browse/RSPEC-101>   |
| `class-prototype`                      | <https://jira.sonarsource.com/browse/RSPEC-3525>  |
| `code-eval`                            | <https://jira.sonarsource.com/browse/RSPEC-1523>  |
| `comma-or-logical-or-case`             | <https://jira.sonarsource.com/browse/RSPEC-3616>  |
| `comment-regex`                        | <https://jira.sonarsource.com/browse/RSPEC-124>   |
| `conditional-indentation`              | <https://jira.sonarsource.com/browse/RSPEC-3973>  |
| `confidential-information-logging`     | <https://jira.sonarsource.com/browse/RSPEC-5757>  |
| `constructor-for-side-effects`         | <https://jira.sonarsource.com/browse/RSPEC-1848>  |
| `content-length`                       | <https://jira.sonarsource.com/browse/RSPEC-5693>  |
| `content-security-policy`              | <https://jira.sonarsource.com/browse/RSPEC-5728>  |
| `cookie-no-httponly`                   | N/A                                               |
| `cookies`                              | <https://jira.sonarsource.com/browse/RSPEC-2255>  |
| `cors`                                 | <https://jira.sonarsource.com/browse/RSPEC-5122>  |
| `csrf`                                 | <https://jira.sonarsource.com/browse/RSPEC-4502>  |
| `cyclomatic-complexity`                | <https://jira.sonarsource.com/browse/RSPEC-1541>  |
| `declarations-in-global-scope`         | <https://jira.sonarsource.com/browse/RSPEC-3798>  |
| `deprecation`                          | <https://jira.sonarsource.com/browse/RSPEC-1874>  |
| `destructuring-assignment-syntax`      | <https://jira.sonarsource.com/browse/RSPEC-3514>  |
| `different-types-comparison`           | <https://jira.sonarsource.com/browse/RSPEC-3403>  |
| `disabled-auto-escaping`               | <https://jira.sonarsource.com/browse/RSPEC-5247>  |
| `disabled-resource-integrity`          | <https://jira.sonarsource.com/browse/RSPEC-5725>  |
| `dns-prefetching`                      | <https://jira.sonarsource.com/browse/RSPEC-5743>  |
| `elseif-without-else`                  | <https://jira.sonarsource.com/browse/RSPEC-126>   |
| `encryption-secure-mode`               | N/A                                               |
| `encryption`                           | <https://jira.sonarsource.com/browse/RSPEC-4787>  |
| `expression-complexity`                | <https://jira.sonarsource.com/browse/RSPEC-1067>  |
| `file-header`                          | <https://jira.sonarsource.com/browse/RSPEC-1451>  |
| `file-name-differ-from-class`          | <https://jira.sonarsource.com/browse/RSPEC-3317>  |
| `file-permissions`                     | <https://jira.sonarsource.com/browse/RSPEC-2612>  |
| `file-uploads`                         | <https://jira.sonarsource.com/browse/RSPEC-2598>  |
| `fixme-tag`                            | <https://jira.sonarsource.com/browse/RSPEC-1134>  |
| `for-in`                               | <https://jira.sonarsource.com/browse/RSPEC-1535>  |
| `for-loop-increment-sign`              | N/A                                               |
| `frame-ancestors`                      | <https://jira.sonarsource.com/browse/RSPEC-5732>  |
| `function-inside-loop`                 | <https://jira.sonarsource.com/browse/RSPEC-1515>  |
| `function-name`                        | <https://jira.sonarsource.com/browse/RSPEC-100>   |
| `function-return-type`                 | <https://jira.sonarsource.com/browse/RSPEC-3800>  |
| `future-reserved-words`                | <https://jira.sonarsource.com/browse/RSPEC-1527>  |
| `generator-without-yield`              | N/A                                               |
| `hashing`                              | <https://jira.sonarsource.com/browse/RSPEC-4790>  |
| `hidden-files`                         | <https://jira.sonarsource.com/browse/RSPEC-5691>  |
| `in-operator-type-error`               | <https://jira.sonarsource.com/browse/RSPEC-3785>  |
| `inconsistent-function-call`           | <https://jira.sonarsource.com/browse/RSPEC-3686>  |
| `index-of-compare-to-positive-number`  | <https://jira.sonarsource.com/browse/RSPEC-2692>  |
| `insecure-cookie`                      | <https://jira.sonarsource.com/browse/RSPEC-2092>  |
| `insecure-jwt-token`                   | <https://jira.sonarsource.com/browse/RSPEC-5659>  |
| `label-position`                       | <https://jira.sonarsource.com/browse/RSPEC-1439>  |
| `max-union-size`                       | <https://jira.sonarsource.com/browse/RSPEC-4622>  |
| `misplaced-loop-counter`               | <https://jira.sonarsource.com/browse/RSPEC-1994>  |
| `nested-control-flow`                  | <https://jira.sonarsource.com/browse/RSPEC-134>   |
| `new-operator-misuse`                  | <https://jira.sonarsource.com/browse/RSPEC-2999>  |
| `no-accessor-field-mismatch`           | <https://jira.sonarsource.com/browse/RSPEC-4275>  |
| `no-alphabetical-sort`                 | <https://jira.sonarsource.com/browse/RSPEC-2871>  |
| `no-angular-bypass-sanitization`       | <https://jira.sonarsource.com/browse/RSPEC-6268>  |
| `no-array-delete`                      | <https://jira.sonarsource.com/browse/RSPEC-2870>  |
| `no-associative-arrays`                | <https://jira.sonarsource.com/browse/RSPEC-3579>  |
| `no-built-in-override`                 | <https://jira.sonarsource.com/browse/RSPEC-2424>  |
| `no-case-label-in-switch`              | <https://jira.sonarsource.com/browse/RSPEC-1219>  |
| `no-clear-text-protocols`              | <https://jira.sonarsource.com/browse/RSPEC-5332>  |
| `no-commented-code`                    | <https://jira.sonarsource.com/browse/RSPEC-125>   |
| `no-dead-store`                        | <https://jira.sonarsource.com/browse/RSPEC-1854>  |
| `no-delete-var`                        | <https://jira.sonarsource.com/browse/RSPEC-3001>  |
| `no-duplicate-in-composite`            | <https://jira.sonarsource.com/browse/RSPEC-4621>  |
| `no-empty-collection`                  | <https://jira.sonarsource.com/browse/RSPEC-4158>  |
| `no-equals-in-for-termination`         | <https://jira.sonarsource.com/browse/RSPEC-888>   |
| `no-for-in-iterable`                   | <https://jira.sonarsource.com/browse/RSPEC-4139>  |
| `no-function-declaration-in-block`     | <https://jira.sonarsource.com/browse/RSPEC-1530>  |
| `no-global-this`                       | <https://jira.sonarsource.com/browse/RSPEC-2990>  |
| `no-globals-shadowing`                 | <https://jira.sonarsource.com/browse/RSPEC-2137>  |
| `no-gratuitous-expressions`            | <https://jira.sonarsource.com/browse/RSPEC-2589>  |
| `no-hardcoded-credentials`             | <https://jira.sonarsource.com/browse/RSPEC-2068>  |
| `no-hardcoded-ip`                      | <https://jira.sonarsource.com/browse/RSPEC-1313>  |
| `no-ignored-return`                    | <https://jira.sonarsource.com/browse/RSPEC-2201>  |
| `no-implicit-dependencies`             | <https://jira.sonarsource.com/browse/RSPEC-4328>  |
| `no-implicit-global`                   | <https://jira.sonarsource.com/browse/RSPEC-2703>  |
| `no-in-misuse`                         | <https://jira.sonarsource.com/browse/RSPEC-4619>  |
| `no-inconsistent-returns`              | <https://jira.sonarsource.com/browse/RSPEC-3801>  |
| `no-incorrect-string-concat`           | <https://jira.sonarsource.com/browse/RSPEC-3402>  |
| `no-infinite-loop`                     | <https://jira.sonarsource.com/browse/RSPEC-2189>  |
| `no-intrusive-permissions`             | <https://jira.sonarsource.com/browse/RSPEC-5604>  |
| `no-invalid-await`                     | <https://jira.sonarsource.com/browse/RSPEC-4123>  |
| `no-invariant-returns`                 | <https://jira.sonarsource.com/browse/RSPEC-3516>  |
| `no-ip-forward`                        | <https://jira.sonarsource.com/browse/RSPEC-5759>  |
| `no-labels`                            | <https://jira.sonarsource.com/browse/RSPEC-1119>  |
| `no-mime-sniff`                        | <https://jira.sonarsource.com/browse/RSPEC-5734>  |
| `no-misleading-array-reverse`          | <https://jira.sonarsource.com/browse/RSPEC-4043>  |
| `no-mixed-content`                     | <https://jira.sonarsource.com/browse/RSPEC-5730>  |
| `no-nested-assignment`                 | <https://jira.sonarsource.com/browse/RSPEC-1121>  |
| `no-nested-conditional`                | <https://jira.sonarsource.com/browse/RSPEC-3358>  |
| `no-nested-incdec`                     | <https://jira.sonarsource.com/browse/RSPEC-881>   |
| `no-nested-switch`                     | <https://jira.sonarsource.com/browse/RSPEC-1821>  |
| `no-nested-template-literals`          | <https://jira.sonarsource.com/browse/RSPEC-4624>  |
| `no-new-symbol`                        | <https://jira.sonarsource.com/browse/RSPEC-3834>  |
| `no-parameter-reassignment`            | <https://jira.sonarsource.com/browse/RSPEC-1226>  |
| `no-primitive-wrappers`                | <https://jira.sonarsource.com/browse/RSPEC-1533>  |
| `no-redundant-assignments`             | <https://jira.sonarsource.com/browse/RSPEC-4165>  |
| `no-redundant-optional`                | <https://jira.sonarsource.com/browse/RSPEC-4782>  |
| `no-redundant-parentheses`             | <https://jira.sonarsource.com/browse/RSPEC-1110>  |
| `no-reference-error`                   | <https://jira.sonarsource.com/browse/RSPEC-3827>  |
| `no-referrer-policy`                   | <https://jira.sonarsource.com/browse/RSPEC-5736>  |
| `no-require-or-define`                 | <https://jira.sonarsource.com/browse/RSPEC-3533>  |
| `no-return-type-any`                   | <https://jira.sonarsource.com/browse/RSPEC-4324>  |
| `no-tab`                               | <https://jira.sonarsource.com/browse/RSPEC-105>   |
| `no-try-promise`                       | <https://jira.sonarsource.com/browse/RSPEC-4822>  |
| `no-undefined-argument`                | <https://jira.sonarsource.com/browse/RSPEC-4623>  |
| `no-undefined-assignment`              | <https://jira.sonarsource.com/browse/RSPEC-2138>  |
| `no-unenclosed-multiline-block`        | <https://jira.sonarsource.com/browse/RSPEC-2681>  |
| `no-unsafe-unzip`                      | <https://jira.sonarsource.com/browse/RSPEC-5042>  |
| `no-unthrown-error`                    | <https://jira.sonarsource.com/browse/RSPEC-3984>  |
| `no-unused-function-argument`          | <https://jira.sonarsource.com/browse/RSPEC-1172>  |
| `no-useless-increment`                 | <https://jira.sonarsource.com/browse/RSPEC-2123>  |
| `no-useless-intersection`              | <https://jira.sonarsource.com/browse/RSPEC-4335>  |
| `no-variable-usage-before-declaration` | <https://jira.sonarsource.com/browse/RSPEC-1526>  |
| `no-weak-cipher`                       | N/A                                               |
| `no-weak-keys`                         | <https://jira.sonarsource.com/browse/RSPEC-4426>  |
| `no-wildcard-import`                   | <https://jira.sonarsource.com/browse/RSPEC-2208>  |
| `non-existent-operator`                | <https://jira.sonarsource.com/browse/RSPEC-2757>  |
| `non-number-in-arithmetic-expression`  | <https://jira.sonarsource.com/browse/RSPEC-3760>  |
| `null-dereference`                     | <https://jira.sonarsource.com/browse/RSPEC-22259> |
| `operation-returning-nan`              | <https://jira.sonarsource.com/browse/RSPEC-3757>  |
| `os-command`                           | <https://jira.sonarsource.com/browse/RSPEC-4721>  |
| `post-message`                         | <https://jira.sonarsource.com/browse/RSPEC-2819>  |
| `prefer-default-last`                  | <https://jira.sonarsource.com/browse/RSPEC-4524>  |
| `prefer-promise-shorthand`             | <https://jira.sonarsource.com/browse/RSPEC-4634>  |
| `prefer-type-guard`                    | <https://jira.sonarsource.com/browse/RSPEC-4322>  |
| `process-argv`                         | <https://jira.sonarsource.com/browse/RSPEC-4823>  |
| `production-debug`                     | <https://jira.sonarsource.com/browse/RSPEC-4507>  |
| `pseudo-random`                        | <https://jira.sonarsource.com/browse/RSPEC-2245>  |
| `publicly-writable-directories`        | <https://jira.sonarsource.com/browse/RSPEC-5443>  |
| `regular-expr`                         | <https://jira.sonarsource.com/browse/RSPEC-4784>  |
| `session-regeneration`                 | <https://jira.sonarsource.com/browse/RSPEC-5876>  |
| `shorthand-property-grouping`          | <https://jira.sonarsource.com/browse/RSPEC-3499>  |
| `sockets`                              | <https://jira.sonarsource.com/browse/RSPEC-4818>  |
| `sonar-block-scoped-var`               | <https://jira.sonarsource.com/browse/RSPEC-2392>  |
| `sonar-max-lines-per-function`         | <https://jira.sonarsource.com/browse/RSPEC-138>   |
| `sonar-max-lines`                      | <https://jira.sonarsource.com/browse/RSPEC-104>   |
| `sonar-no-fallthrough`                 | <https://jira.sonarsource.com/browse/RSPEC-128>   |
| `sonar-no-unused-vars`                 | <https://jira.sonarsource.com/browse/RSPEC-1481>  |
| `sql-queries`                          | <https://jira.sonarsource.com/browse/RSPEC-2077>  |
| `standard-input`                       | <https://jira.sonarsource.com/browse/RSPEC-4829>  |
| `strict-transport-security`            | <https://jira.sonarsource.com/browse/RSPEC-5734>  |
| `strings-comparison`                   | <https://jira.sonarsource.com/browse/RSPEC-3003>  |
| `super-invocation`                     | <https://jira.sonarsource.com/browse/RSPEC-3854>  |
| `switch-without-default`               | <https://jira.sonarsource.com/browse/RSPEC-131>   |
| `todo-tag`                             | <https://jira.sonarsource.com/browse/RSPEC-1135>  |
| `too-many-break-or-continue-in-loop`   | N/A                                               |
| `unused-import`                        | <https://jira.sonarsource.com/browse/RSPEC-1128>  |
| `unverified-certificate`               | <https://jira.sonarsource.com/browse/RSPEC-4830>  |
| `unverified-hostname`                  | <https://jira.sonarsource.com/browse/RSPEC-5667>  |
| `updated-const-var`                    | <https://jira.sonarsource.com/browse/RSPEC-3500>  |
| `updated-loop-counter`                 | <https://jira.sonarsource.com/browse/RSPEC-2310>  |
| `use-type-alias`                       | <https://jira.sonarsource.com/browse/RSPEC-4323>  |
| `useless-string-operation`             | <https://jira.sonarsource.com/browse/RSPEC-1154>  |
| `values-not-convertible-to-numbers`    | <https://jira.sonarsource.com/browse/RSPEC-3758>  |
| `variable-name`                        | <https://jira.sonarsource.com/browse/RSPEC-117>   |
| `void-use`                             | <https://jira.sonarsource.com/browse/RSPEC-3735>  |
| `weak-ssl`                             | <https://jira.sonarsource.com/browse/RSPEC-4423>  |
| `web-sql-database`                     | <https://jira.sonarsource.com/browse/RSPEC-2817>  |
| `x-powered-by`                         | <https://jira.sonarsource.com/browse/RSPEC-5689>  |
| `xml-parser-xxe`                       | <https://jira.sonarsource.com/browse/RSPEC-2755>  |
| `xpath`                                | <https://jira.sonarsource.com/browse/RSPEC-4817>  |

<!-- suffix placeholder -->

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](https://github.com/rx-ts/eslint-plugin-sonar/blob/HEAD/eslint-plugin-sonar/CHANGELOG.md).

## License

[MIT][] © [JounQin][]@[1stG.me][]

[1stg.me]: https://www.1stg.me
[jounqin]: https://GitHub.com/JounQin
[mit]: http://opensource.org/licenses/MIT
