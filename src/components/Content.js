import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import { Layout } from 'antd'

import Home from './Home'
import Profiles from './Profiles'

var { Content } = Layout

export default props => (
    <Content>
        <Route exact path="/" component={Home} />
        <Route exact path="/profiles" component={Profiles} />
    </Content>
)
