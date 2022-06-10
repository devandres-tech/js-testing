// jest.mock() --> the jest version of calling mock
import { it, expect, vi } from 'vitest'
import { promises as fs } from 'fs'

import writeData from './io'

// mocks, they are useful when trying to test external modules/dependencies
vi.mock('fs')
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1]
      },
    },
  }
})

// crates a side effect (writes to the file system)
it('should execute the writeFile method', () => {
  const testData = 'Test'
  const testFileName = 'test.txt'

  writeData(testData, testFileName)
  // expect(fs.writeFile).toBeCalled()
  expect(fs.writeFile).toBeCalledWith(testFileName, testData)
})
