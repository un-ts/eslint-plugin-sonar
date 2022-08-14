# eslint-plugin-sonar

[ESLint](https://github.com/eslint/eslint) rules extracted from [SonarJS](https://github.com/SonarSource/SonarJS)

[![GitHub Actions](https://github.com/un-ts/eslint-plugin-sonar/workflows/CI/badge.svg)](https://github.com/un-ts/eslint-plugin-sonar/actions/workflows/ci.yml)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/un-ts/eslint-plugin-sonar.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/un-ts/eslint-plugin-sonar/context:javascript)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Frx-ts%2Feslint-plugin-sonar%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
[![npm](https://img.shields.io/npm/v/eslint-plugin-sonar.svg)](https://www.npmjs.com/package/eslint-plugin-sonar)
[![GitHub release](https://img.shields.io/github/release/rx-ts/eslint-plugin-sonar)](https://github.com/rx-ts/eslint-plugin-sonar/releases)

[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![changesets](https://img.shields.io/badge/maintained%20with-changesets-176de3.svg)](https://github.com/atlassian/changesets)

## TOC <!-- omit in toc -->

- [Usage](#usage)
  - [Install](#install)
  - [Enable rules manually](#enable-rules-manually)
  - [Extends configs](#extends-configs)
- [Rule list](#rule-list)
- [Sponsors](#sponsors)
- [Backers](#backers)
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

| rule name                                 | detail link                                                     |
| ----------------------------------------- | --------------------------------------------------------------- |
| `anchor-precedence`                       | <https://sonarsource.github.io/rspec/#/rspec/S5850/javascript>  |
| `argument-type`                           | <https://sonarsource.github.io/rspec/#/rspec/S3782/javascript>  |
| `arguments-order`                         | <https://sonarsource.github.io/rspec/#/rspec/S2234/javascript>  |
| `arguments-usage`                         | <https://sonarsource.github.io/rspec/#/rspec/S3513/javascript>  |
| `array-callback-without-return`           | <https://sonarsource.github.io/rspec/#/rspec/S3796/javascript>  |
| `array-constructor`                       | <https://sonarsource.github.io/rspec/#/rspec/S1528/javascript>  |
| `arrow-function-convention`               | <https://sonarsource.github.io/rspec/#/rspec/S3524/javascript>  |
| `assertions-in-tests`                     | <https://sonarsource.github.io/rspec/#/rspec/S2699/javascript>  |
| `aws-s3-bucket-granted-access`            | <https://sonarsource.github.io/rspec/#/rspec/S6265/javascript>  |
| `aws-s3-bucket-insecure-http`             | <https://sonarsource.github.io/rspec/#/rspec/S6249/javascript>  |
| `aws-s3-bucket-public-access`             | <https://sonarsource.github.io/rspec/#/rspec/S6281/javascript>  |
| `aws-s3-bucket-server-encryption`         | <https://sonarsource.github.io/rspec/#/rspec/S6245/javascript>  |
| `aws-s3-bucket-versioning`                | <https://sonarsource.github.io/rspec/#/rspec/S6252/javascript>  |
| `bitwise-operators`                       | <https://sonarsource.github.io/rspec/#/rspec/S1529/javascript>  |
| `bool-param-default`                      | <https://sonarsource.github.io/rspec/#/rspec/S4798/javascript>  |
| `call-argument-line`                      | <https://sonarsource.github.io/rspec/#/rspec/S1472/javascript>  |
| `certificate-transparency`                | <https://sonarsource.github.io/rspec/#/rspec/S5742/javascript>  |
| `chai-determinate-assertion`              | <https://sonarsource.github.io/rspec/#/rspec/S6092/javascript>  |
| `class-name`                              | <https://sonarsource.github.io/rspec/#/rspec/S101/javascript>   |
| `class-prototype`                         | <https://sonarsource.github.io/rspec/#/rspec/S3525/javascript>  |
| `code-eval`                               | <https://sonarsource.github.io/rspec/#/rspec/S1523/javascript>  |
| `comma-or-logical-or-case`                | <https://sonarsource.github.io/rspec/#/rspec/S3616/javascript>  |
| `comment-regex`                           | <https://sonarsource.github.io/rspec/#/rspec/S124/javascript>   |
| `concise-regex`                           | <https://sonarsource.github.io/rspec/#/rspec/S6353/javascript>  |
| `conditional-indentation`                 | <https://sonarsource.github.io/rspec/#/rspec/S3973/javascript>  |
| `confidential-information-logging`        | <https://sonarsource.github.io/rspec/#/rspec/S5757/javascript>  |
| `constructor-for-side-effects`            | <https://sonarsource.github.io/rspec/#/rspec/S1848/javascript>  |
| `content-length`                          | <https://sonarsource.github.io/rspec/#/rspec/S5693/javascript>  |
| `content-security-policy`                 | <https://sonarsource.github.io/rspec/#/rspec/S5728/javascript>  |
| `cookie-no-httponly`                      | <https://sonarsource.github.io/rspec/#/rspec/S3330/javascript>  |
| `cookies`                                 | <https://sonarsource.github.io/rspec/#/rspec/S2255/javascript>  |
| `cors`                                    | <https://sonarsource.github.io/rspec/#/rspec/S5122/javascript>  |
| `csrf`                                    | <https://sonarsource.github.io/rspec/#/rspec/S4502/javascript>  |
| `cyclomatic-complexity`                   | <https://sonarsource.github.io/rspec/#/rspec/S1541/javascript>  |
| `declarations-in-global-scope`            | <https://sonarsource.github.io/rspec/#/rspec/S3798/javascript>  |
| `deprecation`                             | <https://sonarsource.github.io/rspec/#/rspec/S1874/javascript>  |
| `destructuring-assignment-syntax`         | <https://sonarsource.github.io/rspec/#/rspec/S3514/javascript>  |
| `different-types-comparison`              | <https://sonarsource.github.io/rspec/#/rspec/S3403/javascript>  |
| `disabled-auto-escaping`                  | <https://sonarsource.github.io/rspec/#/rspec/S5247/javascript>  |
| `disabled-resource-integrity`             | <https://sonarsource.github.io/rspec/#/rspec/S5725/javascript>  |
| `disabled-timeout`                        | <https://sonarsource.github.io/rspec/#/rspec/S6080/javascript>  |
| `dns-prefetching`                         | <https://sonarsource.github.io/rspec/#/rspec/S5743/javascript>  |
| `duplicates-in-character-class`           | <https://sonarsource.github.io/rspec/#/rspec/S5869/javascript>  |
| `empty-string-repetition`                 | <https://sonarsource.github.io/rspec/#/rspec/S5842/javascript>  |
| `encryption`                              | <https://sonarsource.github.io/rspec/#/rspec/S4787/javascript>  |
| `encryption-secure-mode`                  | <https://sonarsource.github.io/rspec/#/rspec/S5542/javascript>  |
| `existing-groups`                         | <https://sonarsource.github.io/rspec/#/rspec/S6328/javascript>  |
| `expression-complexity`                   | <https://sonarsource.github.io/rspec/#/rspec/S1067/javascript>  |
| `file-header`                             | <https://sonarsource.github.io/rspec/#/rspec/S1451/javascript>  |
| `file-name-differ-from-class`             | <https://sonarsource.github.io/rspec/#/rspec/S3317/javascript>  |
| `file-permissions`                        | <https://sonarsource.github.io/rspec/#/rspec/S2612/javascript>  |
| `file-uploads`                            | <https://sonarsource.github.io/rspec/#/rspec/S2598/javascript>  |
| `fixme-tag`                               | <https://sonarsource.github.io/rspec/#/rspec/S1134/javascript>  |
| `for-in`                                  | <https://sonarsource.github.io/rspec/#/rspec/S1535/javascript>  |
| `for-loop-increment-sign`                 | <https://sonarsource.github.io/rspec/#/rspec/S2251/javascript>  |
| `frame-ancestors`                         | <https://sonarsource.github.io/rspec/#/rspec/S5732/javascript>  |
| `function-inside-loop`                    | <https://sonarsource.github.io/rspec/#/rspec/S1515/javascript>  |
| `function-name`                           | <https://sonarsource.github.io/rspec/#/rspec/S100/javascript>   |
| `function-return-type`                    | <https://sonarsource.github.io/rspec/#/rspec/S3800/javascript>  |
| `future-reserved-words`                   | <https://sonarsource.github.io/rspec/#/rspec/S1527/javascript>  |
| `generator-without-yield`                 | <https://sonarsource.github.io/rspec/#/rspec/S3531/javascript>  |
| `hashing`                                 | <https://sonarsource.github.io/rspec/#/rspec/S4790/javascript>  |
| `hidden-files`                            | <https://sonarsource.github.io/rspec/#/rspec/S5691/javascript>  |
| `in-operator-type-error`                  | <https://sonarsource.github.io/rspec/#/rspec/S3785/javascript>  |
| `inconsistent-function-call`              | <https://sonarsource.github.io/rspec/#/rspec/S3686/javascript>  |
| `index-of-compare-to-positive-number`     | <https://sonarsource.github.io/rspec/#/rspec/S2692/javascript>  |
| `insecure-cookie`                         | <https://sonarsource.github.io/rspec/#/rspec/S2092/javascript>  |
| `insecure-jwt-token`                      | <https://sonarsource.github.io/rspec/#/rspec/S5659/javascript>  |
| `inverted-assertion-arguments`            | <https://sonarsource.github.io/rspec/#/rspec/S3415/javascript>  |
| `label-position`                          | <https://sonarsource.github.io/rspec/#/rspec/S1439/javascript>  |
| `link-with-target-blank`                  | <https://sonarsource.github.io/rspec/#/rspec/S5148/javascript>  |
| `max-union-size`                          | <https://sonarsource.github.io/rspec/#/rspec/S4622/javascript>  |
| `misplaced-loop-counter`                  | <https://sonarsource.github.io/rspec/#/rspec/S1994/javascript>  |
| `nested-control-flow`                     | <https://sonarsource.github.io/rspec/#/rspec/S134/javascript>   |
| `new-operator-misuse`                     | <https://sonarsource.github.io/rspec/#/rspec/S2999/javascript>  |
| `no-accessor-field-mismatch`              | <https://sonarsource.github.io/rspec/#/rspec/S4275/javascript>  |
| `no-alphabetical-sort`                    | <https://sonarsource.github.io/rspec/#/rspec/S2871/javascript>  |
| `no-angular-bypass-sanitization`          | <https://sonarsource.github.io/rspec/#/rspec/S6268/javascript>  |
| `no-array-delete`                         | <https://sonarsource.github.io/rspec/#/rspec/S2870/javascript>  |
| `no-associative-arrays`                   | <https://sonarsource.github.io/rspec/#/rspec/S3579/javascript>  |
| `no-built-in-override`                    | <https://sonarsource.github.io/rspec/#/rspec/S2424/javascript>  |
| `no-case-label-in-switch`                 | <https://sonarsource.github.io/rspec/#/rspec/S1219/javascript>  |
| `no-clear-text-protocols`                 | <https://sonarsource.github.io/rspec/#/rspec/S5332/javascript>  |
| `no-code-after-done`                      | <https://sonarsource.github.io/rspec/#/rspec/S6079/javascript>  |
| `no-commented-code`                       | <https://sonarsource.github.io/rspec/#/rspec/S125/javascript>   |
| `no-dead-store`                           | <https://sonarsource.github.io/rspec/#/rspec/S1854/javascript>  |
| `no-delete-var`                           | <https://sonarsource.github.io/rspec/#/rspec/S3001/javascript>  |
| `no-duplicate-in-composite`               | <https://sonarsource.github.io/rspec/#/rspec/S4621/javascript>  |
| `no-empty-after-reluctant`                | <https://sonarsource.github.io/rspec/#/rspec/S6019/javascript>  |
| `no-empty-alternatives`                   | <https://sonarsource.github.io/rspec/#/rspec/S6323/javascript>  |
| `no-empty-group`                          | <https://sonarsource.github.io/rspec/#/rspec/S6331/javascript>  |
| `no-equals-in-for-termination`            | <https://sonarsource.github.io/rspec/#/rspec/S888/javascript>   |
| `no-exclusive-tests`                      | <https://sonarsource.github.io/rspec/#/rspec/S6426/javascript>  |
| `no-for-in-iterable`                      | <https://sonarsource.github.io/rspec/#/rspec/S4139/javascript>  |
| `no-function-declaration-in-block`        | <https://sonarsource.github.io/rspec/#/rspec/S1530/javascript>  |
| `no-global-this`                          | <https://sonarsource.github.io/rspec/#/rspec/S2990/javascript>  |
| `no-globals-shadowing`                    | <https://sonarsource.github.io/rspec/#/rspec/S2137/javascript>  |
| `no-hardcoded-credentials`                | <https://sonarsource.github.io/rspec/#/rspec/S2068/javascript>  |
| `no-hardcoded-ip`                         | <https://sonarsource.github.io/rspec/#/rspec/S1313/javascript>  |
| `no-hook-setter-in-body`                  | <https://sonarsource.github.io/rspec/#/rspec/S6442/javascript>  |
| `no-implicit-dependencies`                | <https://sonarsource.github.io/rspec/#/rspec/S4328/javascript>  |
| `no-implicit-global`                      | <https://sonarsource.github.io/rspec/#/rspec/S2703/javascript>  |
| `no-in-misuse`                            | <https://sonarsource.github.io/rspec/#/rspec/S4619/javascript>  |
| `no-incomplete-assertions`                | <https://sonarsource.github.io/rspec/#/rspec/S2970/javascript>  |
| `no-inconsistent-returns`                 | <https://sonarsource.github.io/rspec/#/rspec/S3801/javascript>  |
| `no-incorrect-string-concat`              | <https://sonarsource.github.io/rspec/#/rspec/S3402/javascript>  |
| `no-infinite-loop`                        | <https://sonarsource.github.io/rspec/#/rspec/S2189/javascript>  |
| `no-intrusive-permissions`                | <https://sonarsource.github.io/rspec/#/rspec/S5604/javascript>  |
| `no-invalid-await`                        | <https://sonarsource.github.io/rspec/#/rspec/S4123/javascript>  |
| `no-invariant-returns`                    | <https://sonarsource.github.io/rspec/#/rspec/S3516/javascript>  |
| `no-ip-forward`                           | <https://sonarsource.github.io/rspec/#/rspec/S5759/javascript>  |
| `no-labels`                               | <https://sonarsource.github.io/rspec/#/rspec/S1119/javascript>  |
| `no-mime-sniff`                           | <https://sonarsource.github.io/rspec/#/rspec/S5734/javascript>  |
| `no-misleading-array-reverse`             | <https://sonarsource.github.io/rspec/#/rspec/S4043/javascript>  |
| `no-mixed-content`                        | <https://sonarsource.github.io/rspec/#/rspec/S5730/javascript>  |
| `no-nested-assignment`                    | <https://sonarsource.github.io/rspec/#/rspec/S1121/javascript>  |
| `no-nested-conditional`                   | <https://sonarsource.github.io/rspec/#/rspec/S3358/javascript>  |
| `no-nested-incdec`                        | <https://sonarsource.github.io/rspec/#/rspec/S881/javascript>   |
| `no-new-symbol`                           | <https://sonarsource.github.io/rspec/#/rspec/S3834/javascript>  |
| `no-os-command-from-path`                 | <https://sonarsource.github.io/rspec/#/rspec/S4036/javascript>  |
| `no-parameter-reassignment`               | <https://sonarsource.github.io/rspec/#/rspec/S1226/javascript>  |
| `no-primitive-wrappers`                   | <https://sonarsource.github.io/rspec/#/rspec/S1533/javascript>  |
| `no-redundant-assignments`                | <https://sonarsource.github.io/rspec/#/rspec/S4165/javascript>  |
| `no-redundant-optional`                   | <https://sonarsource.github.io/rspec/#/rspec/S4782/javascript>  |
| `no-redundant-parentheses`                | <https://sonarsource.github.io/rspec/#/rspec/S1110/javascript>  |
| `no-reference-error`                      | <https://sonarsource.github.io/rspec/#/rspec/S3827/javascript>  |
| `no-referrer-policy`                      | <https://sonarsource.github.io/rspec/#/rspec/S5736/javascript>  |
| `no-require-or-define`                    | <https://sonarsource.github.io/rspec/#/rspec/S3533/javascript>  |
| `no-return-type-any`                      | <https://sonarsource.github.io/rspec/#/rspec/S4324/javascript>  |
| `no-same-argument-assert`                 | <https://sonarsource.github.io/rspec/#/rspec/S5863/javascript>  |
| `no-tab`                                  | <https://sonarsource.github.io/rspec/#/rspec/S105/javascript>   |
| `no-try-promise`                          | <https://sonarsource.github.io/rspec/#/rspec/S4822/javascript>  |
| `no-undefined-argument`                   | <https://sonarsource.github.io/rspec/#/rspec/S4623/javascript>  |
| `no-undefined-assignment`                 | <https://sonarsource.github.io/rspec/#/rspec/S2138/javascript>  |
| `no-unenclosed-multiline-block`           | <https://sonarsource.github.io/rspec/#/rspec/S2681/javascript>  |
| `no-unsafe-unzip`                         | <https://sonarsource.github.io/rspec/#/rspec/S5042/javascript>  |
| `no-unthrown-error`                       | <https://sonarsource.github.io/rspec/#/rspec/S3984/javascript>  |
| `no-unused-function-argument`             | <https://sonarsource.github.io/rspec/#/rspec/S1172/javascript>  |
| `no-useless-increment`                    | <https://sonarsource.github.io/rspec/#/rspec/S2123/javascript>  |
| `no-useless-intersection`                 | <https://sonarsource.github.io/rspec/#/rspec/S4335/javascript>  |
| `no-useless-react-setstate`               | <https://sonarsource.github.io/rspec/#/rspec/S6443/javascript>  |
| `no-variable-usage-before-declaration`    | <https://sonarsource.github.io/rspec/#/rspec/S1526/javascript>  |
| `no-vue-bypass-sanitization`              | <https://sonarsource.github.io/rspec/#/rspec/S6299/javascript>  |
| `no-weak-cipher`                          | <https://sonarsource.github.io/rspec/#/rspec/S5547/javascript>  |
| `no-weak-keys`                            | <https://sonarsource.github.io/rspec/#/rspec/S4426/javascript>  |
| `no-wildcard-import`                      | <https://sonarsource.github.io/rspec/#/rspec/S2208/javascript>  |
| `non-number-in-arithmetic-expression`     | <https://sonarsource.github.io/rspec/#/rspec/S3760/javascript>  |
| `null-dereference`                        | <https://sonarsource.github.io/rspec/#/rspec/S22259/javascript> |
| `operation-returning-nan`                 | <https://sonarsource.github.io/rspec/#/rspec/S3757/javascript>  |
| `os-command`                              | <https://sonarsource.github.io/rspec/#/rspec/S4721/javascript>  |
| `post-message`                            | <https://sonarsource.github.io/rspec/#/rspec/S2819/javascript>  |
| `prefer-default-last`                     | <https://sonarsource.github.io/rspec/#/rspec/S4524/javascript>  |
| `prefer-promise-shorthand`                | <https://sonarsource.github.io/rspec/#/rspec/S4634/javascript>  |
| `prefer-type-guard`                       | <https://sonarsource.github.io/rspec/#/rspec/S4322/javascript>  |
| `process-argv`                            | <https://sonarsource.github.io/rspec/#/rspec/S4823/javascript>  |
| `production-debug`                        | <https://sonarsource.github.io/rspec/#/rspec/S4507/javascript>  |
| `pseudo-random`                           | <https://sonarsource.github.io/rspec/#/rspec/S2245/javascript>  |
| `publicly-writable-directories`           | <https://sonarsource.github.io/rspec/#/rspec/S5443/javascript>  |
| `regex-complexity`                        | <https://sonarsource.github.io/rspec/#/rspec/S5843/javascript>  |
| `regular-expr`                            | <https://sonarsource.github.io/rspec/#/rspec/S4784/javascript>  |
| `rules-of-hooks`                          | <https://sonarsource.github.io/rspec/#/rspec/S6441/javascript>  |
| `session-regeneration`                    | <https://sonarsource.github.io/rspec/#/rspec/S5876/javascript>  |
| `shorthand-property-grouping`             | <https://sonarsource.github.io/rspec/#/rspec/S3499/javascript>  |
| `single-char-in-character-classes`        | <https://sonarsource.github.io/rspec/#/rspec/S6397/javascript>  |
| `single-character-alternation`            | <https://sonarsource.github.io/rspec/#/rspec/S6035/javascript>  |
| `slow-regex`                              | <https://sonarsource.github.io/rspec/#/rspec/S5852/javascript>  |
| `sockets`                                 | <https://sonarsource.github.io/rspec/#/rspec/S4818/javascript>  |
| `sonar-block-scoped-var`                  | <https://sonarsource.github.io/rspec/#/rspec/S2392/javascript>  |
| `sonar-jsx-no-leaked-render`              | <https://sonarsource.github.io/rspec/#/rspec/S6439/javascript>  |
| `sonar-max-lines`                         | <https://sonarsource.github.io/rspec/#/rspec/S104/javascript>   |
| `sonar-max-lines-per-function`            | <https://sonarsource.github.io/rspec/#/rspec/S138/javascript>   |
| `sonar-no-control-regex`                  | <https://sonarsource.github.io/rspec/#/rspec/S6324/javascript>  |
| `sonar-no-dupe-keys`                      | <https://sonarsource.github.io/rspec/#/rspec/S1534/javascript>  |
| `sonar-no-fallthrough`                    | <https://sonarsource.github.io/rspec/#/rspec/S128/javascript>   |
| `sonar-no-invalid-regexp`                 | <https://sonarsource.github.io/rspec/#/rspec/S5856/javascript>  |
| `sonar-no-misleading-character-class`     | <https://sonarsource.github.io/rspec/#/rspec/S5868/javascript>  |
| `sonar-no-regex-spaces`                   | <https://sonarsource.github.io/rspec/#/rspec/S6326/javascript>  |
| `sonar-no-unused-class-component-methods` | <https://sonarsource.github.io/rspec/#/rspec/S6441/javascript>  |
| `sonar-no-unused-vars`                    | <https://sonarsource.github.io/rspec/#/rspec/S1481/javascript>  |
| `sql-queries`                             | <https://sonarsource.github.io/rspec/#/rspec/S2077/javascript>  |
| `standard-input`                          | <https://sonarsource.github.io/rspec/#/rspec/S4829/javascript>  |
| `stateful-regex`                          | <https://sonarsource.github.io/rspec/#/rspec/S6351/javascript>  |
| `strict-transport-security`               | <https://sonarsource.github.io/rspec/#/rspec/S5734/javascript>  |
| `strings-comparison`                      | <https://sonarsource.github.io/rspec/#/rspec/S3003/javascript>  |
| `super-invocation`                        | <https://sonarsource.github.io/rspec/#/rspec/S3854/javascript>  |
| `switch-without-default`                  | <https://sonarsource.github.io/rspec/#/rspec/S131/javascript>   |
| `test-check-exception`                    | <https://sonarsource.github.io/rspec/#/rspec/S5958/javascript>  |
| `todo-tag`                                | <https://sonarsource.github.io/rspec/#/rspec/S1135/javascript>  |
| `too-many-break-or-continue-in-loop`      | <https://sonarsource.github.io/rspec/#/rspec/S135/javascript>   |
| `unicode-aware-regex`                     | <https://sonarsource.github.io/rspec/#/rspec/S5867/javascript>  |
| `unused-import`                           | <https://sonarsource.github.io/rspec/#/rspec/S1128/javascript>  |
| `unused-named-groups`                     | <https://sonarsource.github.io/rspec/#/rspec/S5860/javascript>  |
| `unverified-certificate`                  | <https://sonarsource.github.io/rspec/#/rspec/S4830/javascript>  |
| `unverified-hostname`                     | <https://sonarsource.github.io/rspec/#/rspec/S5667/javascript>  |
| `updated-const-var`                       | <https://sonarsource.github.io/rspec/#/rspec/S3500/javascript>  |
| `updated-loop-counter`                    | <https://sonarsource.github.io/rspec/#/rspec/S2310/javascript>  |
| `use-type-alias`                          | <https://sonarsource.github.io/rspec/#/rspec/S4323/javascript>  |
| `useless-string-operation`                | <https://sonarsource.github.io/rspec/#/rspec/S1154/javascript>  |
| `values-not-convertible-to-numbers`       | <https://sonarsource.github.io/rspec/#/rspec/S3758/javascript>  |
| `variable-name`                           | <https://sonarsource.github.io/rspec/#/rspec/S117/javascript>   |
| `void-use`                                | <https://sonarsource.github.io/rspec/#/rspec/S3735/javascript>  |
| `weak-ssl`                                | <https://sonarsource.github.io/rspec/#/rspec/S4423/javascript>  |
| `web-sql-database`                        | <https://sonarsource.github.io/rspec/#/rspec/S2817/javascript>  |
| `x-powered-by`                            | <https://sonarsource.github.io/rspec/#/rspec/S5689/javascript>  |
| `xml-parser-xxe`                          | <https://sonarsource.github.io/rspec/#/rspec/S2755/javascript>  |
| `xpath`                                   | <https://sonarsource.github.io/rspec/#/rspec/S4817/javascript>  |

<!-- suffix placeholder -->

## Sponsors

| 1stG                                                                                                                               | RxTS                                                                                                                               | UnTS                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective backers and sponsors](https://opencollective.com/1stG/organizations.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective backers and sponsors](https://opencollective.com/rxts/organizations.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective backers and sponsors](https://opencollective.com/unts/organizations.svg)](https://opencollective.com/unts) |

## Backers

| 1stG                                                                                                                             | RxTS                                                                                                                             | UnTS                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective backers and sponsors](https://opencollective.com/1stG/individuals.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective backers and sponsors](https://opencollective.com/rxts/individuals.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective backers and sponsors](https://opencollective.com/unts/individuals.svg)](https://opencollective.com/unts) |

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](https://github.com/un-ts/eslint-plugin-sonar/blob/HEAD/eslint-plugin-sonar/CHANGELOG.md).

## License

[MIT][] © [JounQin][]@[1stG.me][]

[1stg.me]: https://www.1stg.me
[jounqin]: https://GitHub.com/JounQin
[mit]: http://opensource.org/licenses/MIT
