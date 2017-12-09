import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import * as API from '../api'

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
