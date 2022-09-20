import fs from 'node:fs'

const pkgPath = 'SonarJS/eslint-bridge/package.json'

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8')) as {
  private?: boolean
}

pkg.private = true

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
