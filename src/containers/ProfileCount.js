import React from 'react'
import { connect } from 'react-redux'

export default connect(state => {
    return {
        count: state.profiles.length
    }
})(props => <span children={props.count} />)
