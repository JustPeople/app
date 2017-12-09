import { createStore, combineReducers } from 'redux'

import makeModule from './modules/ModuleMaker'
import profiles from './modules/Profiles'
import profileImages from './modules/ProfileImages'
import data from './modules/Data'

var Filters = makeModule('FILTERS')

var reducer = combineReducers({
    data,
    filters: Filters.reducer,
    profiles,
    profileImages,
    texts: (state = {}, action) => {
        switch (action.type) {
            case 'SET_TEXT': {
                return Object.assign({}, state, action.payload)
            }
            default: {
                return state
            }
        }
    }
})

var initialState = {
    filters: (() => {
        try {
            return JSON.parse(localStorage.filters)
        } catch (err) {
            return {}
        }
    })(),
    texts: {
        MENU_FILTER_TITLE_NAME: 'Nombre',
        MENU_FILTER_TITLE_GENDER: 'Sexo',
        MENU_FILTER_TITLE_LOCATION: 'Ubicación',
        GO_BACK: 'Volver'
    }
}
var store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

store.subscribe(() => {
    var state = store.getState()
    //localStorage.filters = JSON.stringify(state.filters)
})