
const initialState = {
    counter: 5
}
export const modifyCounter = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {counter: state.counter + action.counter}

        case 'DECREMENT':
            return {counter: state.counter - action.counter}
        default:
            return state
    }
}



