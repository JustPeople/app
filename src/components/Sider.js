import React from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'

import ProfileListFilters from '../containers/ProfileListFilters'
import ProfileSider from '../containers/Profile/Sider'

var { Sider } = Layout

export default props => (
    <Sider>
        <Route exact path="/profiles" component={ProfileListFilters} />
        <Route path="/profiles/:id" render={({ match }) => {
            return <ProfileSider id={+match.params.id} />
        }} />
    </Sider>
)
