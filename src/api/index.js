import axios from 'axios'
/*
axios.defaults.baseURL = 'https://just-people.herokuapp.com'
*/
//axios.defaults.baseURL = '//localhost:3001'

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
    var profiles = data

    return profiles.map(p => {
        var { id, name, gender, phone, coordinates, LocationId, avatar } = p
        return {
            id,
            name, gender, phone,
            coordinates,
            locationId: LocationId,
            avatar
        }
    }).sort(() => Math.random() - Math.random())
}

export async function getProfileImages(profileId) {
    if (getProfileImages.cache[profileId]) return getProfileImages.cache[profileId]
    var data = await axios.get('/api/profiles/' + profileId + '/images').then(res => res.data.data)
    getProfileImages.cache[profileId] = data
    for (var i = 0; i < 5; i++) {
        //data = data.concat(data)
    }
    return data
}
getProfileImages.cache = {}