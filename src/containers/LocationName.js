import React from 'react'
import { connect } from 'react-redux'

import * as S from '../selectors'

export default connect((state, ownProps) => {
    var location = S.locationById(state, ownProps.id)
    return {
        name: location.name
    }
})(props => <span>{props.name}</span>)
