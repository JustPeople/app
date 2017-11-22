import * as API from '../api'

import store from '../store'
import * as Profiles from '../modules/Profiles'
import * as Data from '../modules/Data'

export async function loadLocations() {
    var locations = await API.getLocations()
    var action = Data.set({ locations })
    store.dispatch(action)
}

export async function loadProfiles() {
    var profiles = await API.getProfiles()
    var action = Profiles.addProfiles(profiles)
    store.dispatch(action)
}

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)) }

var constructor = (async () => {
    loadProfiles()
    await sleep(1000 * 1)
    loadLocations()
})()
