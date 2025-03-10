# Changelog

## 0.14.2

### Patch Changes

- [#148](https://github.com/un-ts/eslint-plugin-sonar/pull/148) [`f81b834`](https://github.com/un-ts/eslint-plugin-sonar/commit/f81b8341e81c7cd4f622cccf94c3883a9d9fcdbc) Thanks [@JounQin](https://github.com/JounQin)! - fix: add missing/fix incorrect deps

## 0.14.1

### Patch Changes

- [#136](https://github.com/un-ts/eslint-plugin-sonar/pull/136) [`64420fe`](https://github.com/un-ts/eslint-plugin-sonar/commit/64420fe0d1680bb6e435e3915823835372ce17c9) Thanks [@JounQin](https://github.com/JounQin)! - fix: use `builtinRules` instead of `Linter` API - close #133

- [#136](https://github.com/un-ts/eslint-plugin-sonar/pull/136) [`64420fe`](https://github.com/un-ts/eslint-plugin-sonar/commit/64420fe0d1680bb6e435e3915823835372ce17c9) Thanks [@JounQin](https://github.com/JounQin)! - feat: support flat configs:

  ```js
  // eslint.config.js

  import * as sonar from 'eslint-plugin-sonar'

  export default [...sonar.configs.flatRecommended]
  ```

## 0.14.0

### Minor Changes

- [#134](https://github.com/un-ts/eslint-plugin-sonar/pull/134) [`a2e6a8e`](https://github.com/un-ts/eslint-plugin-sonar/commit/a2e6a8e2f5dec7d91dce397272ab72515fff01c5) Thanks [@JounQin](https://github.com/JounQin)! - feat: sync upstream and support tseslint v7

## 0.13.2

### Patch Changes

- [#122](https://github.com/un-ts/eslint-plugin-sonar/pull/122) [`86b291c`](https://github.com/un-ts/eslint-plugin-sonar/commit/86b291c9e0c9adc28f93844addeb7a9e36666859) Thanks [@JounQin](https://github.com/JounQin)! - fix: eslint peer version should be v8 now

## 0.13.1

### Patch Changes

- [#115](https://github.com/un-ts/eslint-plugin-sonar/pull/115) [`eb6899f`](https://github.com/un-ts/eslint-plugin-sonar/commit/eb6899feb3cf90b390e91a86d747d701099f7072) Thanks [@JounQin](https://github.com/JounQin)! - fix: minimatch used in SonarJS is dual

## 0.13.0

### Minor Changes

- [#113](https://github.com/un-ts/eslint-plugin-sonar/pull/113) [`9dc4bfe`](https://github.com/un-ts/eslint-plugin-sonar/commit/9dc4bfed17097d3e33cb79c9e6444f69390b5e39) Thanks [@JounQin](https://github.com/JounQin)! - feat!: bump SonarJS and related dependencies

### Patch Changes

- [#102](https://github.com/un-ts/eslint-plugin-sonar/pull/102) [`23a43b3`](https://github.com/un-ts/eslint-plugin-sonar/commit/23a43b32f846960bb1910f6f4371a3466a726bc1) Thanks [@matwilko](https://github.com/matwilko)! - chore: add missing transitive peer dependencies

## 0.12.0

### Minor Changes

- [#93](https://github.com/un-ts/eslint-plugin-sonar/pull/93) [`776daee`](https://github.com/un-ts/eslint-plugin-sonar/commit/776daeee8c408740d9bffd3f2edb0bcd60807797) Thanks [@JounQin](https://github.com/JounQin)! - feat!: support typescript v5

## 0.11.1

### Patch Changes

- [`4ba78b9`](https://github.com/un-ts/eslint-plugin-sonar/commit/4ba78b97d56b9b26702b3f10c02dc7919e94adc8) Thanks [@JounQin](https://github.com/JounQin)! - fix: add missing tmp dep

## 0.11.0

### Minor Changes

- [`a714658`](https://github.com/un-ts/eslint-plugin-sonar/commit/a71465853d236910aad49cca67046b2c3a67d6a5) Thanks [@JounQin](https://github.com/JounQin)! - feat: sync with upstream

## 0.10.0

### Minor Changes

- [#70](https://github.com/un-ts/eslint-plugin-sonar/pull/70) [`5aa4d74`](https://github.com/un-ts/eslint-plugin-sonar/commit/5aa4d745b6aa8a45f2dce5c96035713f0fdedb8b) Thanks [@JounQin](https://github.com/JounQin)! - chore: bump eslint-plugin-sonarjs to `^0.16.0`

## 0.9.2

### Patch Changes

- [#64](https://github.com/un-ts/eslint-plugin-sonar/pull/64) [`cccb2b7`](https://github.com/un-ts/eslint-plugin-sonar/commit/cccb2b7a137b0982047739c71ac87e5a3d26a2b7) Thanks [@JounQin](https://github.com/JounQin)! - fix: add missing dep `functional-red-black-tree`

## 0.9.1

### Patch Changes

- [#60](https://github.com/un-ts/eslint-plugin-sonar/pull/60) [`b5b3df2`](https://github.com/un-ts/eslint-plugin-sonar/commit/b5b3df282615c1fbc49899f81b26ede0d95b7e5d) Thanks [@JounQin](https://github.com/JounQin)! - fix: add ending `.js` for ESM module compatibility

- [#60](https://github.com/un-ts/eslint-plugin-sonar/pull/60) [`b5b3df2`](https://github.com/un-ts/eslint-plugin-sonar/commit/b5b3df282615c1fbc49899f81b26ede0d95b7e5d) Thanks [@JounQin](https://github.com/JounQin)! - fix: enable `type: module` in `package.json`

## 0.9.0

### Minor Changes

- [#57](https://github.com/un-ts/eslint-plugin-sonar/pull/57) [`1bb8cfd`](https://github.com/un-ts/eslint-plugin-sonar/commit/1bb8cfd75f890c3f0db93edbc6881f5a183a3f24) Thanks [@JounQin](https://github.com/JounQin)! - feat: bump SonarJS and add dependencies (#56)

## [0.8.0](https://github.com/rx-ts/eslint-plugin-sonar/compare/v0.7.1...v0.8.0) (2022-03-29)

### Features

- upgrade eslint-plugin-sonarjs 0.13.0 ([a0d929f](https://github.com/rx-ts/eslint-plugin-sonar/commit/a0d929fcff97990f167d5a9fdf74fe67f0656f78))

### [0.7.1](https://github.com/un-ts/eslint-plugin-sonar/compare/v0.7.0...v0.7.1) (2022-03-06)

### Bug Fixes

- add missing dependency scslre ([8544241](https://github.com/un-ts/eslint-plugin-sonar/commit/85442410118c465056c54f3236fb13c5dc9d4d49))

## [0.7.0](https://github.com/un-ts/eslint-plugin-sonar/compare/v0.6.1...v0.7.0) (2022-03-06)

### Features

- sync with upstream, support ESLint 8.0 ([ce45619](https://github.com/un-ts/eslint-plugin-sonar/commit/ce45619877aa5d212887d5c6904a7bad7e417d0e))

### [0.6.1](https://github.com/un-ts/eslint-plugin-sonar/compare/v0.6.0...v0.6.1) (2021-06-21)

### Bug Fixes

- tag.text could be string on ts<=4.2 ([c0f3c89](https://github.com/un-ts/eslint-plugin-sonar/commit/c0f3c895a4db7ff4245b419b038d95cefc3fa54d))

## [0.6.0](https://github.com/un-ts/eslint-plugin-sonar/compare/v0.5.1...v0.6.0) (2021-06-17)

### Features

- sync with upstream SonarJS, remove unused deps ([266439f](https://github.com/un-ts/eslint-plugin-sonar/commit/266439f7d6dfaa1b19b2234865c3c5e3689a4763))

### [0.5.1](https://github.com/un-ts/eslint-plugin-sonar/compare/v0.5.0...v0.5.1) (2021-04-30)

### Bug Fixes

- accept A-Z started function name ([eece6dc](https://github.com/un-ts/eslint-plugin-sonar/commit/eece6dc95227abc72952a2387d97a55a93aa48b0))

## [0.5.0](https://github.com/un-ts/eslint-plugin-sonar/compare/v0.4.0...v0.5.0) (2021-04-23)

### Features

- synchronize with SonarJS, bump deps ([e00f51f](https://github.com/un-ts/eslint-plugin-sonar/commit/e00f51f0fccd03f5752baf8837605ab96620b002))

## [0.4.0](https://github.com/un-ts/eslint-plugin-sonar/compare/v0.3.0...v0.4.0) (2021-03-14)

### Features

- disable some redundant rules for ts files, remove strict config ([3257cd3](https://github.com/un-ts/eslint-plugin-sonar/commit/3257cd33c4ada40fcd29210cdea82b88d009112c))

## [0.3.0](https://github.com/un-ts/eslint-plugin-sonar/compare/v0.2.3...v0.3.0) (2021-03-14)

### Features

- add custom configs - close [#1](https://github.com/un-ts/eslint-plugin-sonar/issues/1) ([94f460a](https://github.com/un-ts/eslint-plugin-sonar/commit/94f460a30fa6f1d1006264503896bc4cd4652f68))

### [0.2.3](https://github.com/un-ts/eslint-plugin-sonar/compare/v0.2.2...v0.2.3) (2021-03-13)

### Bug Fixes

- relax deps range, add rules list into README ([dc4ab2b](https://github.com/un-ts/eslint-plugin-sonar/commit/dc4ab2b50c3841ed129f1e77d31d3369d998137f))

### [0.2.2](https://github.com/un-ts/eslint-plugin-sonar/compare/v0.2.1...v0.2.2) (2021-03-02)

### Bug Fixes

- use @babel/eslint-parser directly as dependency ([3349dd4](https://github.com/un-ts/eslint-plugin-sonar/commit/3349dd424444b0a5b44d9ed33498c34f236b74d0))

### 0.2.1 (2021-03-02)

### Features

- first blood, should just work ([3879aee](https://github.com/un-ts/eslint-plugin-sonar/commit/3879aeebfabd6d8b2245b80e331c93663d00df8e))
- list (peer) dependencies ([1a321c8](https://github.com/un-ts/eslint-plugin-sonar/commit/1a321c833674570c57d53474371573c4d6dcece6))

### Bug Fixes

- mark eslint related modules as dependencies instead of peer ([2d53e61](https://github.com/un-ts/eslint-plugin-sonar/commit/2d53e61800006543c216f8586871f2beae6d78f0))
