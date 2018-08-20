import * as actions from './CounterActions';
describe('actions', () => {
    it('should create an action to increment the counter', () => {
        const expectedAction = {
            type: 'INCREMENT',
            counter: 1
        }
        expect(actions.increment()).toEqual(expectedAction)
    })
    it('should create an action to decrement the counter', () => {
        const expectedAction = {
            type: 'DECREMENT',
            counter: 1
        }
        expect(actions.decrement()).toEqual(expectedAction)
    })
})
