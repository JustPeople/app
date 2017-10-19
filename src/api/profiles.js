var profiles = [{
    id: 1,
    name: 'Denise',
    phone: '+54 11 7894-1591',
    gender: 'm',
    locationId: 6
}, {
    id: 2,
    name: 'Jessica',
    phone: '+54 11 9879-4564',
    gender: 'f',
    locationId: 5
}, {
    id: 3,
    name: 'Tatiana',
    phone: '+54 11 1234-4789',
    gender: 't',
    locationId: 4
}].map(profile => {
    profile.avatar = '/assets/profiles/:id/avatar.png'.replace(':id', profile.id)
    return profile
})

for (var i = 0; i < 4; i++) {
    profiles.map(p => {
        profiles.push(p)
    })
}
module.exports = profiles
