import React from 'react'
import { connect } from 'react-redux'
import { Menu, Select } from 'antd'

import * as API from '../../api'

var { Option } = Select

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

            var locations = ids.concat(children).filter((e, i, arr) => arr.indexOf(e) === i).sort()

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

export default LocationSelector
