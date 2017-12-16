import React from 'react'
import { connect } from 'react-redux'
import { Menu } from 'antd'

import * as API from '../api'

import Text from './Text'
import NameFilter from './ProfileListFilters/NameFilter'
import GenderFilter from './ProfileListFilters/GenderFilter'
import LocationSelector from './ProfileListFilters/LocationSelector'

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

var Filters = props => {
    return (
        <Menu>
            <Menu.ItemGroup title={<Text code="MENU_FILTER_TITLE_NAME" />}>
                <Menu.Item>
                    <NameFilter />
                </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title={<Text code="MENU_FILTER_TITLE_GENDER" />}>
                <Menu.Item>
                    <GenderFilter />
                </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title={<Text code="MENU_FILTER_TITLE_LOCATION" />}>
                <div style={{ padding: '0.5rem' }}>
                    <LocationSelector />
                </div>
                <LocationSubMenu id={2} />
                <LocationSubMenu id={6} />
            </Menu.ItemGroup>
        </Menu>
    )
}
export default connect()(Filters)
