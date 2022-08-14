import { camelCase, kebabCase } from 'eslint-plugin-sonar'

describe('camelCase', () => {
  it('should just work', () => {
    expect(camelCase('a-b-c')).toBe('aBC')
    expect(camelCase('ab-cd-ef')).toBe('abCdEf')
  })
})

describe('kebabCase', () => {
  it('should just work', () => {
    expect(kebabCase('aBC')).toBe('a-b-c')
    expect(kebabCase('abCdEf')).toBe('ab-cd-ef')
  })
})
