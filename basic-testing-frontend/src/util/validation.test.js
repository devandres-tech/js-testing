import { it, expect, describe } from 'vitest'

import { validateNumber, validateStringNotEmpty } from './validation'

describe('validateStringNotEmpty()', () => {
  it('validateStringNotEmpty - should throw an error if empty string is passed', () => {
    const input = ''
    const result = () => {
      validateStringNotEmpty(input)
    }

    expect(result).toThrow('Invalid input - must not be empty.')
  })
})

describe('validateNumber()', () => {
  it('validateNumber - should throw an error if param is not of type number', () => {
    const input = 'hello'
    const result = () => {
      validateNumber(input)
    }

    expect(result).toThrow('Invalid number input.')
  })

  it('should throw an error, if a non-numeric value is provided', () => {
    const input = '1'
    const validateFn = () => validateNumber(input)
    expect(validateFn).toThrow()
  })

  it('should throw an error, if a number is provided', () => {
    const input = 1
    const validateFn = () => validateNumber(input)
    expect(validateFn).not.toThrow()
  })
})
