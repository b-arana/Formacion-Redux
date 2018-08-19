
const initialState = 5;
export const modifyCounter = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.counter

        case 'DECREMENT':
            return state - action.counter
        default:
            return state
    }
}



