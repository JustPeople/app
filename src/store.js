import { createStore, combineReducers } from 'redux'

import makeModule from './modules/ModuleMaker'
import profiles from './modules/Profiles'

var Data = makeModule('DATA', {
    locations: require('./api/locations')
})
var Filters = makeModule('FILTERS')

var reducer = combineReducers({
    data: Data.reducer,
    filters: Filters.reducer,
    profiles
})

var store = createStore(reducer)

export default store
