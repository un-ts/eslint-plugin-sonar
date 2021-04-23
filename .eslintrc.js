require('tsconfig-paths').register()
require('ts-node').register()

module.exports = {
  extends: ['@1stg', 'plugin:sonar/recommended'],
  settings: {
    jsdoc: {
      mode: 'typescript',
    },
  },
}
