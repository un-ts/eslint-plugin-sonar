import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const PATCH_FILE = 'ts-4.2.patch'

const TARGET_FILE = path.resolve(`SonarJS/${PATCH_FILE}`)

fs.writeFileSync(
  TARGET_FILE,
  fs.readFileSync(path.resolve(`patches/${PATCH_FILE}`)),
)

try {
  execSync(`cd SonarJS && git apply ${PATCH_FILE}`)
  console.log('Patch applied successfully')
} catch {
  console.log('Already patched')
}

fs.unlinkSync(TARGET_FILE)
