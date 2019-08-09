/* eslint-env jest */

import { sum } from '../index'

describe('example/Math functions', () => {
  it('tests if sum works correctly', () => {
    const tests = [
      { a: 1, b: 1, output: 2 },
      { a: 3, b: 1, output: 4 },
      { a: -3, b: 1, output: -2 },
      { a: null, b: 1, output: 0 },
      { a: null, b: null, output: 0 },
      { a: undefined, b: null, output: 0 },
      { a: {}, b: 10, output: 0 },
      { a: 'fsfsd', b: 'fsdfsd', output: 0 },
      { a: 'fsfsd', b: 12, output: 0 }
    ]

    tests.forEach((item) => {
      console.log('test', item, typeof item.a);
      expect(sum(item.a, item.b)).toBe(item.output)
    })
  })

  it('tests undefined and null', () => {
    expect(undefined == null).toBe(true)
    expect(undefined === null).toBe(false)
    expect(undefined !== null).toBe(true)
    expect(0 == null).toBe(false)
  })
})
