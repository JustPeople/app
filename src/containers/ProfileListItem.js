import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import LocationName from './LocationName'

import * as Selectors from '../selectors'

function ProfileBackgroundColor(props) {
    switch (props.gender) {
        case 'f': return 'hsla(0, 100%, 90%, 1)'
        case 'm': return 'hsla(210, 100%, 90%, 1)'
        case 't': return 'hsla(270, 100%, 90%, 1)'
        default: return 'hsla(0, 0%, 90%, 1)'
    }
}

var Profile = styled.div`
    display: grid;
    grid-template-areas: "avatar" "info";
    background-color: ${ProfileBackgroundColor};
    width: 190px;
    transition: all 0.3s;
    box-shadow: 2px 2px 5px #bbb;
    &:hover {
        box-shadow: 2px 2px 5px #888;
    }
`
var ProfileAvatarDiv = styled.div`
    grid-area: avatar;
`
var ProfileInfoDiv = styled.div`
    display: grid;
    grid-area: info;
    grid-template-columns: 1fr;
    color: #333;
`

var ProfileAvatar = connect((state, ownProps) => {
    var profile = state.profiles.find(p => p.id === ownProps.id)
    return {
        src: profile.avatar
    }
})(props => (
    <ProfileAvatarDiv>
        <img alt="avatar" src={props.src} style={{ width: '190px', height: '190px' }} />
    </ProfileAvatarDiv>
))

var ProfileListItem = props => {
    var { id, name, phone, locationId } = props
    return (
        <Profile {...props}>
            <Link to={'/profiles/' + id}>
                <ProfileAvatar id={id} />
                <ProfileInfoDiv>
                    <strong>{name}</strong>
                    <div>{phone}</div>
                    <div>
                        <LocationName id={locationId} />
                    </div>
                </ProfileInfoDiv>
            </Link>
        </Profile>
    )
}

export default connect((state, ownProps) => {
    var profile = Selectors.getProfileById(state, ownProps.id)
    return {
        ...profile
    }
})(ProfileListItem)
