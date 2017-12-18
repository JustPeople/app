import React from 'react'
import { connect } from 'react-redux'

import * as Selectors from '../../selectors'
import * as DataService from '../../services/data'

class ProfileImages extends React.Component {
    async componentWillMount() {
        this.props.loadImages()
    }
    render() {
        var { images = [] } = this.props
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {images.map(img => (
                    <div key={img.url} style={{ padding: '0.5rem', maxWidth: '300px' }}>
                        <img src={img.url} style={{ width: '100%' }} alt={img.url} />
                    </div>
                ))}
            </div>
        )
    }
}

export default connect((state, ownProps) => {
    var profile = state.profiles.find(profile => profile.id === ownProps.id)
    var images = Selectors.getProfileImages(state, ownProps.id)
    return { ...profile, images }
}, (dispatch, ownProps) => {
    return {
        async loadImages(images) {
            var { id } = ownProps
            return DataService.loadProfileImages(id)
        }
    }
})(ProfileImages)
