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
 * @type { import('rollup').RollupOptions[] }
 */
const configs = ['cjs', 'esm'].map(format => ({
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
      name: 'change-bundle-code',
      generateBundle(_options, bundle) {
        const chunk = bundle[`${format}.js`]
        if (chunk && 'code' in chunk) {
          chunk.code = chunk.code
            // `babel-eslint` is legacy
            .replace(/\bbabel-eslint\b/, '@babel/eslint-parser')
            // remove-unused-vue-eslint-parser
            .replace(
              format === 'cjs'
                ? `require('vue-eslint-parser');\n`
                : `import 'vue-eslint-parser';\n`,
              '',
            )
        }
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

export default configs
