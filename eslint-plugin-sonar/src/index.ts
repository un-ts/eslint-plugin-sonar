import * as _configs from './configs'
import * as _rules from './rules'
import { normalizeModules } from './utils'

export * from './rules'
export * from './utils'

export const configs = normalizeModules(_configs)
export const rules = normalizeModules(_rules)
