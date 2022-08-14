import * as _configs from './configs'
import { normalizeModules } from './utils'

export * from './utils'

export const configs = normalizeModules(_configs)

export * from 'sonarjs/rules'
