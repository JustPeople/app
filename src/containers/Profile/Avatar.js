import React from 'react'
import { connect } from 'react-redux'
import { Avatar } from 'antd'

export default connect((state, ownProps) => {
    var profile = state.profiles.find(profile => profile.id === ownProps.id)||{}
    return {
        src: profile.avatar
    }
})(props => {
    var h = props.size + 'rem'
    var w = props.size + 'rem'
    var r = (props.size / 2) + 'rem'
    return (
        <Avatar src={props.src} style={{
            height: h, width: w,
            borderRadius: r
        }} />
    )
})
