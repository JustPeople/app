export function getProfileById(state, profileId) {
    var profile = state.profiles.find(p => p.id === profileId)
    return profile
}
export function getFilteredProfiles(state) {
    var selectedGenders = getSelectedGenders(state)
    var selectedLocations = getSelectedLocations(state, {
        includeChildren: true
    })

    var gendersFilter = makeGendersFilter(selectedGenders)
    var locationsFilter = makeLocationsFilter(selectedLocations)

    var profiles = state.profiles
        .filter(gendersFilter)
        .filter(locationsFilter)
    return profiles
}
export function locationById(state, id) {
    var { locations } = state.data
    return locations.find(l => l.id === id)
}
export function getSelectedGenders(state) {
    var { genders = [] } = state.filters
    return genders
}
export function getSelectedLocations(state, options = {}) {
    var { locations = [] } = state.filters
    if (!options.includeChildren) return locations
    return locations.reduce((sum, id) => {
        return sum.concat(getChildrenLocations(state, id).map(l => l.id))
    }, locations)
}
export function getChildrenLocations(state, locationId, recursive) {
    var { locations } = state.data
    var children = locations.filter(location => location.parentId === locationId)
    if (!recursive) return children
    return children.map(location => {
        location.children = getChildrenLocations(state, location.id, recursive)
        return location
    })
}
function makeGendersFilter(genders) {
    return profile => {
        if (!genders.length) return true
        return genders.indexOf(profile.gender) !== -1
    }
}
function makeLocationsFilter(locations) {
    return profile => {
        if (!locations.length) return true
        return locations.indexOf(profile.locationId) !== -1
    }
}