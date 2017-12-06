import React from 'react'
import { connect } from 'react-redux'
import { Input } from 'antd'

var NameFilter = connect(state => {
    return {
        ...state.filters
    }
}, dispatch => {
    return {
        onChange(ev) {
            var { value } = ev.target
            dispatch({
                type: 'FILTERS/SET',
                payload: {
                    name: value
                }
            })
        }
    }
})(props => {
    return (
        <Input onChange={props.onChange} />
    )
})

export default NameFilter
