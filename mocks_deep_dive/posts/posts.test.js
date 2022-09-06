import { describe, expect, it } from 'vitest'
import { extractPostData } from './posts'

const testTitle = 'Test title'
const testContent = 'Test content'
const testFormData = {
  title: testTitle,
  content: testContent,
  get(key) {
    return this[key]
  },
}

describe('extractPostData()', () => {
  it('should extract title and content from the provided form data', () => {
    const data = extractPostData(testFormData)
    expect(data.title).toBe(testTitle)
    expect(data.content).toBe(testContent)
  })
})
