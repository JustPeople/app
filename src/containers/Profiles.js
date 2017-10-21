import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { media, mediaAlt } from '../media'

import * as Selectors from '../selectors'

import ProfileListItem from './ProfileListItem'

//var media = mediaAlt

var ProfilesGrid = styled.div`
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: repeat(5, 1fr);
    ${media.desktop`
        grid-template-columns: repeat(3, 1fr);
        background: red;
    `}
    ${media.tablet`
        grid-template-columns: repeat(2, 1fr);
        background: yellow;
    `}
    ${media.phone`
        grid-template-columns: repeat(1, 1fr);
        background: green;
    `}
`

var ProfileList = props => {
    return (
        <ProfilesGrid>
            {props.profiles.map((profile, i) => (
                <div key={'' + profile.id + i} style={{ margin: 'auto' }}>
                    <ProfileListItem id={profile.id} />
                </div>
            ))}
        </ProfilesGrid>
    )
}

export default connect(state => {
    var profiles = Selectors.getFilteredProfiles(state)
    return { profiles }
})(ProfileList)
