import React from 'react'
import { connect } from 'react-redux'
import { Button, Select } from 'antd'

import * as API from '../api'

var ButtonGroup = Button.Group
var { Option, OptGroup } = Select

var GenderFilter = connect(state => {
    return {
        ...state.filters
    }
}, dispatch => {
    return {
        toggle(gender) {
            dispatch({
                type: 'FILTERS/TOGGLE',
                payload: gender
            })
        }
    }
})(props => {
    return (
        <ButtonGroup>
            {['m', 'f', 't'].map(g =>
                <Button key={g} type={props[g] ? 'primary' : ''}
                    onClick={ev => props.toggle(g)}
                    children={g.toUpperCase()}
                />
            )}
        </ButtonGroup>
    )
})
var LocationSelector = connect(state => {
    var { locations } = state.data
    var profileCountByLocation = state.profiles
        .map(profile => profile.locationId)
        .reduce((sum, id) => {
            sum[id] = sum[id] || 0
            sum[id]++
            return sum
        }, {})

    return {
        locations,
        profileCountByLocation
    }
}, dispatch => {
    return {
        async onChange(selected) {
            var ids = selected.map(option => +option)
            if (!ids.length) {
                return dispatch({
                    type: 'FILTERS/REMOVE',
                    payload: 'locations'
                })
            }

            var children = []
            for (var i in ids) {
                var id = ids[i]
                children = children.concat(await API.getChildLocations(id))
            }

            var locations = ids.concat(children).filter((e, i, arr) => arr.indexOf(e) === i)

            return dispatch({
                type: 'FILTERS/SET',
                payload: {
                    locations
                }
            })
        }
    }
})(props => {
    return (
        <Select onChange={props.onChange} mode="tags" placeholder="Location" style={{ width: '100%' }}>
            {props.locations.map(location => {
                var { id, name } = location
                return (
                    <Option key={'' + id} value={'' + id}>
                        {name} {props.profileCountByLocation[id]}
                    </Option>
                )
            })}
        </Select>
    )
})

var Filters = props => {
    return (
        <div>
            <div>
                <GenderFilter />
            </div>
            <div style={{ padding: '0.5rem' }}>
                <LocationSelector />
            </div>
        </div>
    )
}
export default connect()(Filters)
