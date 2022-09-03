import { it, expect } from 'vitest'
import { generateToken, generateTokenPromise } from './async-example'

// testing async code with callback functions
it('should generate a token value', (done) => {
  const testUserEmail = 'test@test.com'

  generateToken(testUserEmail, (err, token) => {
    try {
      expect(token).toBeDefined()
      //   expect(token).toBe(2)
      done()
    } catch (error) {
      done(error)
    }
  })
})

// testing async code with promises
it('should generate a token value ', () => {
  const testUserEmail = 'test@test.com'
  expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined()
})

// testing async code with async/await (alt)
it('should generate a token value ', async () => {
  const testUserEmail = 'test@test.com'
  const token = await generateTokenPromise(testUserEmail)
  expect(token).toBeDefined()
})
