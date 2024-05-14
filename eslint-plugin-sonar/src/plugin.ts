import { name, version } from '../package.json' with { type: 'json' }

export { rules } from 'sonarjs/rules/index.js'

export const meta = {
  name,
  version,
}
