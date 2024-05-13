// @ts-check

import fs from 'node:fs'

import { rules } from 'eslint-plugin-sonar'
import prettier from 'prettier'

/**
 * @param {string} [link]
 */
const wrapLink = link => (link ? `<${link}>` : 'N/A')

const rulesFileContent = fs.readFileSync(
  'SonarJS/packages/jsts/src/rules/index.ts',
  'utf8',
)

/**
 * @param {string} rule
 */
const getRuleDetailLink = rule => {
  const matched = new RegExp(`rules\\['${rule}'\\] = (S\\d+)`).exec(
    rulesFileContent,
  )
  if (!matched) {
    return
  }
  return `https://sonarsource.github.io/rspec/#/rspec/${matched[1]}/javascript`
}

const ruleNames = Object.keys(rules)

const srcPath = 'README.md'
const destPath = 'eslint-plugin-sonar/README.md'

const prefixPlaceholder = '<!-- prefix placeholder -->'
const suffixPlaceholder = '<!-- suffix placeholder -->'

const srcContent = fs.readFileSync(srcPath, 'utf8')

const prefix = srcContent.slice(
  0,
  srcContent.indexOf(prefixPlaceholder) + prefixPlaceholder.length,
)

const suffix = srcContent.slice(srcContent.lastIndexOf(suffixPlaceholder))

const destContent = await prettier.format(
  `${prefix}
| rule name | detail link |
| --------- | ----------- |
${ruleNames
  .map(rule => '| `' + rule + '` | ' + wrapLink(getRuleDetailLink(rule)) + ' |')
  .join('\n')}
${suffix}`,
  {
    ...(await prettier.resolveConfig(srcPath)),
    parser: 'markdown',
  },
)

fs.writeFileSync(destPath, destContent)
fs.writeFileSync(srcPath, destContent)
