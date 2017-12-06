import { createStore, combineReducers } from 'redux'

import makeModule from './modules/ModuleMaker'
import profiles from './modules/Profiles'
import data from './modules/Data'

var Filters = makeModule('FILTERS')

var reducer = combineReducers({
    data,
    filters: Filters.reducer,
    profiles
})

var initialState = {
    filters: (() => {
        try {
            return JSON.parse(localStorage.filters)
        } catch (err) {
            return {}
        }
    })()
}
var store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

store.subscribe(() => {
    var state = store.getState()
    //localStorage.filters = JSON.stringify(state.filters)
})