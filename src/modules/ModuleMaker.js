export default function makeModule(namespace, initialState = {}) {

    const SET = namespace + '/SET'
    const TOGGLE = namespace + '/TOGGLE'
    const REMOVE = namespace + '/REMOVE'

    function reducer(state = initialState, action) {
        var { type, payload } = action
        switch (type) {
            case SET: {
                return Object.assign({}, state, payload)
            }
            case TOGGLE: {
                return Object.assign({}, state, {
                    [payload]: !state[payload]
                })
            }
            case REMOVE: {
                var nextState = Object.assign({}, state)
                delete nextState[payload]
                return nextState
            }
            default: {
                return state
            }
        }
    }

    return {
        reducer,
        set: payload => ({ type: SET, payload }),
        remove: payload => ({ type: REMOVE, payload })
    }

}
