// @ts-check

import ts from 'rollup-plugin-ts'
import builtinModules from 'builtin-modules'

import pkg from './SonarJS/eslint-bridge/package.json'

const EXTERNALS = [...builtinModules, ...Object.keys(pkg.dependencies)]

/**
 * @param {string} source
 */
const external = source =>
  EXTERNALS.some(external => new RegExp(`^${external}(\\/?|$)`).test(source))

/**
 * @type {import('rollup').RollupOptions[]}
 */

export default ['cjs', 'esm'].map(format => ({
  input: 'eslint-plugin-sonar/src/index.ts',
  plugins: [
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
      name: 'remove-unused-vue-eslint-parser',
      generateBundle(_options, bundle) {
        const chunk = bundle[`${format}.js`]
        chunk.code = chunk.code.replace(
          format === 'cjs'
            ? `require('vue-eslint-parser');\n`
            : `import 'vue-eslint-parser';\n`,
          '',
        )
      },
    },
  ],
  external,
  output: {
    format: /** @type {import('rollup').ModuleFormat} */ (format),
    sourcemap: true,
    file: `eslint-plugin-sonar/lib/${format}.js`,
  },
}))
