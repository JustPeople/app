const ADD = 'ADD_IMAGE'
const ADD_IMAGES = 'ADD_IMAGES'

var initialState = []
export default function reducer(state = initialState, action) {
    var { type, payload } = action
    switch (type) {
        case ADD: {
            var updated = false
            var newState = state.map(entity => {
                if (entity.id !== payload.id) return entity
                updated = true
                return payload
            })
            if (!updated) newState.push(payload)
            return newState
        }
        case ADD_IMAGES: {
            var currentIds = state.map(p => p.id)
            var newEntities = payload.filter(p => currentIds.indexOf(p.id) === -1)
            return state.concat(newEntities)
        }
        default:
            return state
    }
}

export function addImage(entity) {
    return {
        type: ADD,
        payload: entity
    }
}

export function addImages(entities) {
    return {
        type: ADD_IMAGES,
        payload: entities
    }
}
