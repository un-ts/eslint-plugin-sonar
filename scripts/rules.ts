import fs from 'fs'

import prettier from 'prettier'

import { camelCase } from 'eslint-plugin-sonar/utils'

const RILES_SRC_DIR = 'SonarJS/eslint-bridge/src/rules'
const RILES_DEST_FILE = 'eslint-plugin-sonar/src/rules.ts'

// TODO: find out any solutions
const EXCLUDED_RULES = new Set([
  'accessor-pairs-decorator',
  'cookie-flag-check',
  'decorators',
  'lva',
  'main',
  'no-redeclare-decorator',
  'no-unused-expressions-decorator',
  'object-shorthand-decorator',
  'prefer-template-decorator',
  'reachingDefinitions',
  'regex-rule-template',
  'utils-express',
])

const main = async () => {
  const files = await fs.promises.readdir(RILES_SRC_DIR)
  const code = files.reduce((acc, file) => {
    const rule = file.replace(/\.ts$/, '')
    if (EXCLUDED_RULES.has(rule)) {
      return acc
    }
    return (
      acc +
      `export { rule as ${camelCase(rule)} } from 'sonarjs/rules/${rule}'\n`
    )
  }, '')
  await fs.promises.writeFile(
    RILES_DEST_FILE,
    prettier.format(code, {
      parser: 'typescript',
      ...prettier.resolveConfig.sync('index.ts'),
    }),
  )
}

main().catch(console.error)
