export const camelCase = (value: string) =>
  value.replace(/-[a-z]/g, matched => matched[1].toUpperCase())

export const kebabCase = (value: string) =>
  value.replace(/[A-Z]/g, matched => '-' + matched.toLowerCase())
