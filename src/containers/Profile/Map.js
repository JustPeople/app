import React from 'react'
import { connect } from 'react-redux'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'

import Avatar from './Avatar'

const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel")

const SRC = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCePt7NR915XpEE0xfF-Ihl03q3or4wVfY&v=3.exp&libraries=geometry,drawing,places'

export var ProfileMarker = connect((state, ownProps) => {
    var profile = state.profiles.find(profile => profile.id === ownProps.id) || {}
    var { latitude, longitude } = profile.coordinates || {}
    var coords = {
        lat: latitude,
        lng: longitude
    }
    return {
        coords
    }
})(props => (
    <MarkerWithLabel position={props.coords} labelAnchor={new window.google.maps.Point(0, 0)}>
        <Avatar id={props.id} size={3} />
    </MarkerWithLabel>
))

var ProfileMap = withScriptjs(withGoogleMap(props => (
    <GoogleMap defaultZoom={15} defaultCenter={props.coords}>
        <ProfileMarker id={props.id} />
    </GoogleMap>
)))

export default connect((state, ownProps) => {
    var profile = state.profiles.find(profile => profile.id === ownProps.id) || {}
    var { latitude, longitude } = profile.coordinates || {}
    var coords = {
        lat: latitude,
        lng: longitude
    }
    return {
        coords
    }
})(props => <ProfileMap
    googleMapURL={SRC}
    loadingElement={<div style={{ height: '100%' }} />}
    containerElement={<div style={{ height: '100%' }} />}
    mapElement={<div style={{ height: '100%' }} />}
    {...props}
/>)
