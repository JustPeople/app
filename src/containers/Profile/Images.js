import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Carousel } from 'antd'
import styled from 'styled-components'

import * as DataService from '../../services/data'

var Div = styled.div`
    & .ant-carousel {
        .slick-slide {
            text-align: center;
            height: 160px;
            line-height: 160px;
            background: #364d79;
            overflow: hidden;
        }
        .slick-slide h3 {
            color: #fff;
        }
    }
`

class ProfileImages extends React.Component {
    async componentWillMount() {
        this.props.loadImages()
    }
    render() {
        var { id, images = [] } = this.props
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {images.map(img => (
                    <div style={{ padding: '0.5rem', width: '300px' }}>
                        <img src={img.url} style={{ width: '100%' }} />
                    </div>
                ))}
            </div>
        )
    }
}

export default connect((state, ownProps) => {
    var profile = state.profiles.find(profile => profile.id === ownProps.id)
    var images = state.profileImages.filter(image => image.ProfileId === ownProps.id)
    return { ...profile, images }
}, (dispatch, ownProps) => {
    return {
        async loadImages(images) {
            var { id } = ownProps
            return DataService.loadProfileImages(id)
        }
    }
})(ProfileImages)
