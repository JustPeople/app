import React from 'react'
import { connect } from 'react-redux'
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
`

var ProfileAvatar = props => (
    <ProfileAvatarDiv>
        <img alt="avatar" src={'/assets/profiles/' + props.id + '/avatar.png'} style={{ width: '190px', height: '140px' }} />
    </ProfileAvatarDiv>
)

var ProfileListItem = props => {
    var { id, name, phone, locationId } = props
    return (
        <Profile {...props}>
            <ProfileAvatar id={id} />
            <ProfileInfoDiv>
                <div>{name}</div>
                <div>{phone}</div>
                <div>
                    <LocationName id={locationId} />
                </div>
            </ProfileInfoDiv>
        </Profile>
    )
}

export default connect((state, ownProps) => {
    var profile = Selectors.getProfileById(state, ownProps.id)
    return {
        ...profile
    }
})(ProfileListItem)
