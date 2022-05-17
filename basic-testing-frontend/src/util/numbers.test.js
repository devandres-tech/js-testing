import { it, describe, expect } from 'vitest'

import { transformToNumber, cleanNumbers } from './numbers'

describe('transformToNumber()', () => {
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
})

describe('cleanNumbers()', () => {
  it('should return an array of number values if an array of string number values is provided', () => {
    const numberValues = ['1', '2']
    const cleanedNumbers = cleanNumbers(numberValues)
    expect(cleanedNumbers[0]).toBeTypeOf('number')
  })

  it('should throw an error if an array with at least one empty string is provided', () => {
    const numberValues = ['', 1]
    const cleanFn = () => cleanNumbers(numberValues)
    expect(cleanFn).toThrow()
  })
})
