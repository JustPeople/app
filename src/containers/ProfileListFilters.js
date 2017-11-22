import React from 'react'
import { connect } from 'react-redux'

import * as API from '../api'

var GenderFilter = connect(state => {
    return {}
}, dispatch => {
    return { dispatch }
})(props => {
    return (
        <div style={{ display: 'flex' }}>
            <div><input type="checkbox" /> M</div>
            <div><input type="checkbox" /> F</div>
            <div><input type="checkbox" /> T</div>
        </div>
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
        async onChange(ev) {
            var ids = Array.from(ev.target.selectedOptions).map(option => +option.value)
            if (!ids[0]) {
                return dispatch({
                    type: 'FILTERS/REMOVE',
                    payload: 'locations'
                })
            }
            var first = ids[0]

            var children = await API.getChildLocations(ids[0])

            return dispatch({
                type: 'FILTERS/SET',
                payload: {
                    locations: [first].concat(children)
                }
            })
        }
    }
})(props => {
    return (
        <select onChange={props.onChange}>
            <option value="">-- Location --</option>
            {props.locations.map(location => {
                var { id, name } = location
                return (
                    <option key={id} value={id}>
                        {name} {props.profileCountByLocation[id]}
                    </option>
                )
            })}

        </select>
    )
})

var Filters = props => {
    return (
        <div style={{ display: 'flex' }}>
            <LocationSelector />
            <GenderFilter />
        </div>
    )
}
export default connect()(Filters)
