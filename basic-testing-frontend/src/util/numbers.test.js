import { it, expect } from 'vitest'

import { transformToNumber } from './numbers'

it('should return a number when a string is passed', () => {
  const numString = '4'
  const numInt = parseInt(numString, 16)

  const result = transformToNumber(numString)
  expect(result).toBe(numInt)
})

it('should return type number when a string is passed', () => {
  const numString = '4'

  const result = transformToNumber(numString)
  expect(result).toBeTypeOf('number')
})

// multiple expectations
it('should yield NaN for non transformable numbers', () => {
  const input = {}
  const input2 = 'invalid'
  const result = transformToNumber(input)
  const result2 = transformToNumber(input2)
  expect(result).toBeNaN()
  expect(result2).toBeNaN()
})
