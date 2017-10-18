import { createStore, combineReducers } from 'redux'

import profiles from './modules/Profiles'

var reducer = combineReducers({
    profiles
})

var store = createStore(reducer)

export default store
