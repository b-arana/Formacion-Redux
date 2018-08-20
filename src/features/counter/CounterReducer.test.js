import {modifyCounter} from './CounterReducer'
import {increment, decrement} from './CounterActions'
describe('counter reducer', () => {

    it('should return the initial state', () => {
        expect(modifyCounter(undefined, {})).toEqual(5)
    })
    it('should handle INCREMENT and DECREMENT', () => {
      expect(modifyCounter(5, increment())).toEqual(6)

      expect(modifyCounter(5,decrement())).toEqual(4)
  })
})