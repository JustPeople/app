import React from 'react'
import { connect } from 'react-redux'

export default connect((state, ownProps) => {
    var text = (state.texts || {})[ownProps.code] || ownProps.code
    return { text }
})(props => {
    return props.text
})
