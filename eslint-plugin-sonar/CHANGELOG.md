# Changelog

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
