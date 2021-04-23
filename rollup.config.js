// @ts-check

import ts from 'rollup-plugin-ts'
import builtinModules from 'builtin-modules'

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
 * @param {string} format output format
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
          chunk.code = removeUnusedDeps(
            chunk.code,
            format,
            'vue-eslint-parser',
            '@typescript-eslint/parser',
          )
        }
      },
    },
  ],
  output: {
    format: /** @type {import('rollup').ModuleFormat} */ (format),
    sourcemap: true,
    file: `eslint-plugin-sonar/lib/${format}.js`,
  },
  external,
}))

export default configs
