export function getProfileById(state, profileId) {
    var profile = state.profiles.find(p => p.id === profileId)
    return profile
}
export function getFilteredProfiles(state) {
    var { filters } = state
    var profiles = state.profiles.filter(profile => {
        return true
    })
    return profiles
}
