import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import ProfileCount from '../containers/ProfileCount'

const { Header, Sider, Content } = Layout

export default props => (
    <Header id="header">
        <Menu1 />
    </Header>
)

var Menu1 = props => (
    <Menu mode="horizontal" style={{
        color: 'white',
        backgroundColor: '#00152a'
    }}>
        <Menu.Item key="brand" children={(
            <img src="/assets/logo.png" style={{ height: '2rem' }} alt={'logo'} />
        )} />
        <Menu.Item key="home" children={(
            <Link to="/" children=" Home" />
        )} />
        <Menu.Item key="profiles" children={(
            <Link to="/profiles" children="Perfiles" />
        )} />
        <Menu.Item key="profilesMap" children={(
            <Link to="/profiles/map" children="Mapa" />
        )} />
        <Menu.Item key="contact" children={(
            <Link to="/contact" children="Publicar" />
        )} style={{
            position: 'fixed',
            right: '50px'
        }} />
    </Menu>
)

// eslint-disable-next-line
var Menu2 = props => (
    <Layout>
        <Sider>
            <Link to="/" children={'Home'} />
        </Sider>
        <Content>
            <ProfileCount />
        </Content>
        <Sider>
            <Link to="/profiles" children={'Profiles'} />
        </Sider>
    </Layout>
)