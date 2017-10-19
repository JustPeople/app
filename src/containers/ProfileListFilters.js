import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

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
    return { locations }
}, dispatch => {
    return {
        onChange(ev) {
            var ids = Array.from(ev.target.selectedOptions).map(option => +option.value)
            if (!ids[0]) {
                return dispatch({
                    type: 'FILTERS/REMOVE',
                    payload: 'locations'
                })
            }
            return dispatch({
                type: 'FILTERS/SET',
                payload: {
                    locations: [].concat(ids)
                }
            })
        }
    }
})(props => {
    return (
        <select onChange={props.onChange} multiple size={8}>
            <option value="">-- Location --</option>
            {props.locations.map(location =>
                <option key={location.id} value={location.id}>{location.name}</option>)}
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
