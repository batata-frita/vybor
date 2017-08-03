import выбор from '../src'
import {equal} from 'assert'

describe('выбор', () => {
  it('returns the successor of the closest match', () => {
    equal(выбор('two')(
      'one', 1,
      'two', 2,
      'three', 3
    ), 2)
  })

  it('returns undefined if nothing is matched', () => {
    equal(выбор('four')(
      'one', 1,
      'two', 2,
      'three', 3
    ), undefined)
  })
})
