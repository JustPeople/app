import React from 'react'
import { connect } from 'react-redux'
import { Button, Select } from 'antd'

var ButtonGroup = Button.Group

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
            <Button type={props['m'] ? 'primary' : ''} onClick={ev => props.toggle('m')}>
                <i className="fa fa-mars" />
            </Button>
            <Button type={props['f'] ? 'primary' : ''} onClick={ev => props.toggle('f')}>
                <i className="fa fa-venus" />
            </Button>
            <Button type={props['t'] ? 'primary' : ''} onClick={ev => props.toggle('t')}>
                <i className="fa fa-transgender" />
            </Button>
        </ButtonGroup>
    )
})

export default GenderFilter
