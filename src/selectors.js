import Levenshtein from 'levenshtein'

export function getProfileById(state, profileId) {
    var profile = state.profiles.find(p => p.id === profileId)
    return profile
}
export function getProfileMedia(state, profileId, mediaType) {
    var media = state.profileImages
        .filter(media => media.role === mediaType)
        .filter(media => media.ProfileId === profileId)
    return media
}
export function getProfileImages(state, profileId) {
    return getProfileMedia(state, profileId, 'image')
}
export function getProfileVideos(state, profileId) {
    return getProfileMedia(state, profileId, 'video')
}
export function getFilteredProfiles(state) {
    var selectedGenders = getSelectedGenders(state)
    var selectedLocations = getSelectedLocations(state, {
        includeChildren: true
    })

    var nameFilter = state.filters.name ? profile => {
        var name = profile.name.toLowerCase()
        var filter = state.filters.name.toLowerCase()
        if (name.indexOf(filter) !== -1) return true
        var distances = name.split(' ').map(word => (new Levenshtein(word, filter)).distance)
        return !!(distances.filter(dist => dist < 3)).length
    } : profile => profile
    var gendersFilter = makeGendersFilter(selectedGenders)
    var locationsFilter = makeLocationsFilter(selectedLocations)

    var profiles = state.profiles
        .filter(nameFilter)
        .filter(gendersFilter)
        .filter(locationsFilter)
    return profiles
}
export function locationById(state, id) {
    var { locations } = state.data
    return locations.find(l => l.id === id)
}
export function getSelectedGenders(state) {
    var genders = []
    state.filters.m && genders.push('m')
    state.filters.f && genders.push('f')
    state.filters.t && genders.push('t')
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