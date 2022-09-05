import { it, vi, expect } from 'vitest'

import { sendDataRequest } from './util/http'

const testResponseData = {
  testKey: 'testData',
}

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData)
        })
      },
    }
    resolve(testResponse)
  })
})

// testing the global fetch api with mocks, stub global is useful
// when testing code that is not coming from a module/package
vi.stubGlobal('fetch', testFetch)

it('should return any available response data', () => {
  const testData = {
    key: 'test',
  }
  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData)
})
