import React from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'

import Home from './Home'
import ProfilesGrid from '../containers/Profiles'
import ProfileContent from '../containers/Profile/Content'
import ProfileImages from '../containers/Profile/Images'
import ProfileVideos from '../containers/Profile/Videos'

var { Content } = Layout

export default props => (
    <Route render={props => (
        <Content style={{
            padding: '1rem',
            background: bgColor(props)
        }}>
            <Route exact path="/" component={Home} />
            <Route exact path="/profiles" component={ProfilesGrid} />
            <Route exact path="/profiles/:id" render={({ match }) => {
                var { id } = match.params
                return <ProfileContent id={+id} />
            }} />
            <Route exact path="/profiles/:id/images" render={({ match }) => {
                var { id } = match.params
                return <ProfileImages id={+id} />
            }} />
            <Route exact path="/profiles/:id/videos" render={({ match }) => {
                var { id } = match.params
                return <ProfileVideos id={+id} />
            }} />
        </Content>
    )} />
)

function bgColor(props) {
    var { pathname } = props.location
    if (!pathname) return
    if (pathname.indexOf('/profiles/') === 0) return '#364d79'
}