import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import * as API from '../api'

import ProfileListFilters from '../containers/ProfileListFilters'

var { Sider } = Layout

function makeLocationFilter(locationId) {
    return connect(state => {
        var location = (state.data.locations || []).find(l => l.id === locationId) || {}
        return { name: location.name }
    }, dispatch => ({
        async onClick() {
            var ids = [locationId];
            var children = []
            for (var i in ids) {
                var id = ids[i]
                children = children.concat(await API.getChildLocations(id))
            }

            var locations = ids.concat(children).filter((e, i, arr) => arr.indexOf(e) === i).sort()

            return dispatch({
                type: 'FILTERS/SET',
                payload: {
                    locations
                }
            })
        }
    }))(props => <span {...props} children={props.name} />)
}

export default props => (
    <Sider>
        <Route exact path="/profiles" component={ProfileListFilters} />
        <Menu>
            <Menu.ItemGroup title="Locations">
                <LocationSubMenu id={2} />
                <LocationSubMenu id={6} />
            </Menu.ItemGroup>
        </Menu>
    </Sider>
)

var LocationSubMenu = connect((state, ownProps) => {
    var children = (state.data.locations || [])
        .filter(l => l.LocationId === ownProps.id)
        .sort((l1, l2) => l1.name.localeCompare(l2.name))
        .map(l => l.id)
    return { children }
})(props => {
    var Filter = makeLocationFilter(props.id)
    if (!props.children.length) {
        return (
            <Menu>
                <Menu.Item children={<Filter />} />
            </Menu>
        )
    }
    return (
        <Menu>
            <Menu.SubMenu title={<Filter />}>
                {props.children.map(id => <LocationSubMenu key={id} id={id} />)}
            </Menu.SubMenu>
        </Menu>
    )
})