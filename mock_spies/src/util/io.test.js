import { it, expect } from 'vitest'
import writeData from './io'

// crates a side effect (writes to the file system)
it('should execute the writeFile method', () => {
  const testData = 'Test'
  const testFileName = 'test.txt'
  return expect(writeData(testData, testFileName)).resolves.toBeUndefined()
})
