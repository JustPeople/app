import * as API from '../api'

import store from '../store'
import { addProfile } from '../modules/Profiles'
import * as Data from '../modules/Data'

export async function loadLocations() {
    var locations = await API.getLocations()
    var action = Data.set({ locations })
    store.dispatch(action)
}

export async function loadProfiles() {
    var profiles = await API.getProfiles()
    profiles.map(p => {
        var action = addProfile(p)
        store.dispatch(action)
    })
}

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)) }

var constructor = (async () => {
    loadLocations()
    loadProfiles()
})()
