import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'

import ProfileListFilters from '../containers/ProfileListFilters'
import ProfileSider from '../containers/Profile/Sider'

var { Sider } = Layout

export default props => (
    <Sider>
        <Route exact path="/profiles" component={ProfileListFilters} />
        <Switch>
            <Route path="/profiles/map" render={({ match }) => 'map-sider'} />
            <Route path="/profiles/:id" render={({ match }) => {
                return <ProfileSider id={+match.params.id} />
            }} />
        </Switch>
    </Sider>
)
