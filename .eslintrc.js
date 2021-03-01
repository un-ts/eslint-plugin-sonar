require('tsconfig-paths').register()
require('ts-node').register()

module.exports = {
  extends: '@1stg',
  plugins: ['eslint-plugin-sonar'],
  rules: {
    'sonar/deprecation': 2,
  },
}
