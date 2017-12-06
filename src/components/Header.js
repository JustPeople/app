import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'

import ProfileCount from '../containers/ProfileCount'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
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
        <Menu.Item key="home" children={(
            <Link to="/" children="Home" />
        )} />
        <Menu.Item />
        <Menu.Item key="profiles" children={(
            <Link to="/profiles" children="Perfiles" />
        )} />
    </Menu>
)

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