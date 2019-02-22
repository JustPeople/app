import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'

import ProfileListFilters from '../containers/ProfileListFilters'
import ProfileSider from '../containers/Profile/Sider'

var { Sider } = Layout

var Map = ({ match }) => 'map-sider'
var Profile = ({ match }) => <ProfileSider id={+match.params.id} />

export default props => (
    <Switch>
        <Route exact path="/" render={() => null} />
        <Route path="*" render={() => (
            <Sider>
                <Route exact path="/profiles" component={ProfileListFilters} />
                <Switch>
                    <Route path="/profiles/map" render={Map} />
                    <Route path="/profiles/:id" render={Profile} />
                </Switch>
            </Sider>
        )} />
    </Switch>
)
