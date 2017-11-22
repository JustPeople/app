import axios from 'axios'
axios.defaults.baseURL = '//localhost:3002'

export async function getLocations() {
    var locations = await axios.get('/api/locations').then(res => res.data.data)
    return locations
}

export async function getChildLocations(locationId) {
    if (getChildLocations.cache[locationId]) return getChildLocations.cache[locationId]
    var { children } = await axios.get('/api/locations/' + locationId).then(res => res.data.data)
    getChildLocations.cache[locationId] = children
    return children
}
getChildLocations.cache = {}

export async function getProfiles() {
    var data = await axios.get('/api/profiles').then(res => res.data.data)
    return data.map(p => {
        var { id, name, gender, phone, LocationId } = p
        return {
            id, name, gender, phone,
            locationId: LocationId
        }
    })
}

export async function getProfileImages(profileId) {
    var data = await axios.get('/api/profiles/' + profileId + '/images').then(res => res.data.data)
    return data
}
