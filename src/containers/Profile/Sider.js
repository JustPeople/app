import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Avatar, Card, Carousel, Menu } from 'antd'
import styled from 'styled-components'

import Text from '../Text'
import LocationName from '../LocationName'

import * as API from '../../api'
import * as Profiles from '../../modules/Profiles'

class ProfileSider extends React.Component {
    render() {
        var { id, avatar } = this.props
        return (
            <Menu>
                <Menu.Item>
                    <Link to="/profiles" children={<Text code="GO_BACK" />} />
                </Menu.Item>
                <div style={{ height: '1rem', backgroundColor: '#00152a' }} />
                <Menu.ItemGroup>
                    <Menu.Item>
                        <Avatar src={avatar} size="large" />
                    </Menu.Item>
                    <Menu.Item>{this.props.name}</Menu.Item>
                    <Menu.Item>{this.props.phone}</Menu.Item>
                    <Menu.Item>
                        <LocationName id={this.props.locationId} />
                    </Menu.Item>
                </Menu.ItemGroup>
                <div style={{ height: '1rem', backgroundColor: '#00152a' }} />
                <Menu.Item>
                    <Link to={'/profiles/' + id} children={<Text code="PROFILE" />} />
                </Menu.Item>
                <Menu.Item>
                    <Link to={'/profiles/' + id + '/images'} children={<Text code="PROFILE_IMAGES" />} />
                </Menu.Item>
            </Menu>
        )
    }
}

export default connect((state, ownProps) => {
    var profile = state.profiles.find(profile => profile.id === ownProps.id)
    return { ...profile }
}, (dispatch, ownProps) => ({
    async loadImages(images) {
    }
}))(ProfileSider)
