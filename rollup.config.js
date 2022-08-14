// @ts-check

import alias from '@rollup/plugin-alias'
import builtinModules from 'builtin-modules'
import ts from 'rollup-plugin-ts'

import pkg from './SonarJS/eslint-bridge/package.json'

const EXTERNALS = [...builtinModules, ...Object.keys(pkg.dependencies)]

/**
 * @param {string} source source file
 * @returns {boolean} should source file be externalized
 */
const external = source =>
  EXTERNALS.some(external => new RegExp(`^${external}(\\/?|$)`).test(source))

/**
 * @param {string} content file content
 * @param {import('rollup').ModuleFormat} format output format
 * @param {string[]} deps dependency name list
 * @returns {string} replaced content
 */
const removeUnusedDeps = (content, format, ...deps) => {
  for (const dep of deps) {
    content = content.replace(
      format === 'cjs' ? `require('${dep}');\n` : `import '${dep}';\n`,
      '',
    )
  }
  return content
}

/**
 *
 * @param { import('rollup').ModuleFormat } format
 * @returns {string} filename
 */
const getFilename = format => `index.${format === 'cjs' ? 'cjs' : 'js'}`

/**
 * @type { import('rollup').RollupOptions[] }
 */
const configs = /** @type {const} */ (['cjs', 'esm']).map(format => ({
  input: 'eslint-plugin-sonar/src/index.ts',
  plugins: [
    alias({
      entries: [
        {
          find: /\b(css|postcss|stylelint|yaml)\b/,
          replacement: '',
        },
      ],
    }),
    ts({
      transpileOnly: true,
      tsconfig(resolvedConfig) {
        const declaration = format === 'esm'
        return {
          ...resolvedConfig,
          declaration,
          declarationMap: false,
        }
      },
    }),
    {
      name: 'change-bundle-code',
      generateBundle(_options, bundle) {
        const chunk = bundle[getFilename(format)]
        if (chunk && 'code' in chunk) {
          chunk.code = removeUnusedDeps(
            chunk.code,
            format,
            'process',
            'vue-eslint-parser',
            '@typescript-eslint/eslint-plugin',
            '@typescript-eslint/parser',
          )
        }
      },
    },
  ],
  output: {
    format,
    sourcemap: true,
    file: `eslint-plugin-sonar/lib/${getFilename(format)}`,
  },
  external,
}))

export default configs
