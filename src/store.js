import { createStore, combineReducers } from 'redux'

import makeModule from './modules/ModuleMaker'
import profiles, { addProfile } from './modules/Profiles'
import data from './modules/Data'

var Filters = makeModule('FILTERS')

var reducer = combineReducers({
    data,
    filters: Filters.reducer,
    profiles
})

var store = createStore(reducer)

export default store
