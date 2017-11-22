const ADD = 'ADD_PROFILE'
const ADD_PROFILES = 'ADD_PROFILES'

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
        case ADD_PROFILES: {
            var currentIds = state.map(p => p.id)
            var newProfiles = payload.filter(p => currentIds.indexOf(p.id) === -1)
            return state.concat(newProfiles)
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

export function addProfiles(profiles) {
    return {
        type: ADD_PROFILES,
        payload: profiles
    }
}
