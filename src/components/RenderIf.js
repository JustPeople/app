import React from 'react'

class RenderIf extends React.Component {
    render() {
        var props = this.props
        if (!props.isTrue) return null
        return props.children
    }
}

export default RenderIf
