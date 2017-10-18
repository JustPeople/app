import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

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
    box-shadow: 1px 1px 2px #eee;
    &:hover {
        box-shadow: 1px 1px 5px #888;
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

var ProfileListItem = props => {
    return (
        <Profile {...props}>
            <ProfileAvatar id={props.id} />
            <ProfileInfoDiv>
                <div>{props.name}</div>
                <div>{props.phone}</div>
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

var ProfileAvatar = props => (
    <ProfileAvatarDiv>
        <img src={'/assets/profiles/' + props.id + '/avatar.png'} style={{ width: '190px', height: '140px' }} />
    </ProfileAvatarDiv>
)