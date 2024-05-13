// @ts-check

import fs from 'node:fs'

const pkgPath = 'SonarJS/package.json'

/**
 * @type {{ private?: boolean }}
 */
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))

pkg.private = true

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
