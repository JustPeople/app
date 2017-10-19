export function getProfileById(state, profileId) {
    var profile = state.profiles.find(p => p.id === profileId)
    return profile
}
export function getFilteredProfiles(state) {
    var { filters } = state

    var selectedLocations = getSelectedLocations(state)
    var selectedlocationsAndChildren = selectedLocations.reduce((sum, id) => {
        return sum.concat(getChildrenLocations(state, id).map(l => l.id))
    }, selectedLocations)

    var profiles = state.profiles.filter(profile => {
        var profileLocation = profile.locationId
        if (!selectedlocationsAndChildren.length) return true
        return selectedlocationsAndChildren.indexOf(profile.locationId) !== -1
    })
    return profiles
}
export function locationById(state, id) {
    var { locations } = state.data
    return locations.find(l => l.id === id)
}
export function getSelectedLocations(state) {
    var { locations = [] } = state.filters
    return locations
}
export function getChildrenLocations(state, locationId, recursive) {
    var { locations } = state.data
    var children = locations.filter(location => location.parentId == locationId)
    if (!recursive) return children
    return children.map(location => {
        return getChildrenLocations(state, location.id, recursive)
    })
}