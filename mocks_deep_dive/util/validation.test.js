import { it, expect } from 'vitest'
import { validateNotEmpty } from './validation'

it('should trow validation error if text is empty', () => {
  const textMessage = ''
  const errorMessage = 'error message'

  const validationFn = () => validateNotEmpty(textMessage, errorMessage)

  expect(validationFn).toThrowError(errorMessage)
})

it('should trow validation error if text is has whitespace only', () => {
  const textMessage = '   '
  const errorMessage = 'error message'

  const validationFn = () => validateNotEmpty(textMessage, errorMessage)

  expect(validationFn).toThrowError(errorMessage)
})

it('should trow validation error if text is undefined', () => {
  let textMessage
  const errorMessage = 'error message'

  const validationFn = () => validateNotEmpty(textMessage, errorMessage)

  expect(validationFn).toThrowError(errorMessage)
})
