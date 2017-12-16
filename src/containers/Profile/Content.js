import React from 'react'
import { connect } from 'react-redux'
import { Carousel } from 'antd'
import styled from 'styled-components'

import * as Selectors from '../../selectors'
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

var ImagesList = connect((state, ownProps) => {
    var profile = state.profiles.find(profile => profile.id === ownProps.id)
    var images = Selectors.getProfileImages(state, ownProps.id)
    return { ...profile, images }
})(({ images = [] }) => {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
        }}>
            {images.map(img => {
                return <img src={img.url} style={{ height: '10vh' }} alt={img.url} />
            })}
        </div>
    )
})

class ProfileContent extends React.Component {
    async componentWillMount() {
        this.props.loadImages()
    }
    render() {
        var { id, images = [] } = this.props
        return (
            <Div>
                <div style={{ padding: '0.25rem' }}>
                    <ImagesList id={id} />
                </div>
                <Carousel autoplay autoplaySpeed={1000 * 5}>
                    {images.map(img => (
                        <div style={{ height: '70vh' }}>
                            <img src={img.url} style={{ height: '100%', margin: 'auto' }} alt={img.url} />
                        </div>
                    ))}
                </Carousel>
            </Div>
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
})(ProfileContent)
