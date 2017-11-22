const ADD = 'ADD_PROFILE'

var initialState = []
export default function reducer(state = initialState, action) {
    var { type, payload } = action
    switch (type) {
        case ADD: {
            var updated = false
            var newState = state.map(profile => {
                if (profile.id !== payload.id) return profile
                updated = true
                return payload
            })
            if (!updated) newState.push(payload)
            return newState
        }
        default:
            return state
    }
}

export function addProfile(profile) {
    return {
        type: ADD,
        payload: profile
    }
}
