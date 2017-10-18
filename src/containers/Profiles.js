import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import * as Selectors from '../selectors'

import ProfileListItem from './ProfileListItem'

var ProfilesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0.5rem;
`

var ProfileList = props => {
    return (
        <ProfilesGrid>
            {props.profiles.map(profile => (
                <div style={{ margin: 'auto' }}>
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
