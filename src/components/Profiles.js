import React from 'react'

import Filters from '../containers/ProfileListFilters'
import ProfilesGrid from '../containers/Profiles'

export default props => {
    return (
        <div>
            <Filters />
            <ProfilesGrid />
        </div>
    )
}