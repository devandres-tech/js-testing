import { it, expect } from 'vitest'

import { transformToNumber } from './numbers'

it('should return a number when a string is passed', () => {
  const numString = '4'
  const numInt = parseInt(numString, 16)

  const result = transformToNumber(numString)
  expect(result).toBe(numInt)
})

it('should yield NaN for non transformable numbers', () => {
  const input = {}
  const result = transformToNumber(input)
  expect(result).toBeNaN()
})
