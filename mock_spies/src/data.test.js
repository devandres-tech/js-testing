import { describe, it, expect, vi } from 'vitest'
import { generateReportData } from './data'

describe('generateReportData()', () => {
  it('should execute logFn if provided', () => {
    // spy, it will spy on the function that was passed as an argument
    const logger = vi.fn()
    generateReportData(logger)

    // expect(logger).toBeCalledTimes(4)
    expect(logger).toBeCalled()
  })
})
