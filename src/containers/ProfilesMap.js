import React from 'react'
import { connect } from 'react-redux'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'

import { ProfileMarker } from './Profile/Map'

const SRC = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCePt7NR915XpEE0xfF-Ihl03q3or4wVfY&v=3.exp&libraries=geometry,drawing,places'

var ProfilesMap = withScriptjs(withGoogleMap(props => (
    <GoogleMap defaultZoom={15} defaultCenter={props.coords}>
        {props.ids.map(id => (
            <ProfileMarker id={id} />
        ))}
    </GoogleMap>
)))

export default connect((state, ownProps) => {
    var ids = state.profiles.filter(p => p.coordinates).map(p => p.id)
    var profile = state.profiles.find(profile => profile.id === ownProps.id) || {}
    var { latitude, longitude } = profile.coordinates || {}
    var coords = {
        lat: latitude,
        lng: longitude
    }
    return {
        ids,
        coords
    }
})(props => <ProfilesMap
    googleMapURL={SRC}
    loadingElement={<div style={{ height: '100%' }} />}
    containerElement={<div style={{ height: '100%' }} />}
    mapElement={<div style={{ height: '100%' }} />}
    {...props}
/>)
