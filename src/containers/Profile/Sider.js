import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon, Menu } from 'antd'

import Avatar from './Avatar'
import Text from '../Text'
import LocationName from '../LocationName'

class ProfileSider extends React.Component {
    render() {
        var { id } = this.props
        return (
            <Menu>
                <Menu.Item>
                    <span>
                        <Icon type="rollback" />
                        <Link to="/profiles" children={<Text code="GO_BACK" />} />
                    </span>
                </Menu.Item>
                <div style={{ height: '1rem', backgroundColor: '#00152a' }} />
                <Menu.ItemGroup>
                    <Menu.Item style={{ height: '7rem' }}>
                        <Avatar id={id} size={7} />
                    </Menu.Item>
                    <Menu.Item>{this.props.name}</Menu.Item>
                    <Menu.Item>
                        <div>
                            <Icon type="phone" />
                            <span>{this.props.phone}</span>
                        </div>
                    </Menu.Item>
                    <Menu.Item>
                        <div>
                            <Icon type="environment" />
                            <LocationName id={this.props.locationId} />
                        </div>
                    </Menu.Item>
                </Menu.ItemGroup>
                <div style={{ height: '1rem', backgroundColor: '#00152a' }} />
                <Menu.Item>
                    <Link to={'/profiles/' + id} children={<Text code="PROFILE" />} />
                </Menu.Item>
                <Menu.Item>
                    <div>
                        <Icon type="camera" />
                        <Link to={'/profiles/' + id + '/images'} children={<Text code="MENU_PROFILE_IMAGES" />} />
                    </div>
                </Menu.Item>
                <Menu.Item>
                    <div>
                        <Icon type="video-camera" />
                        <Link to={'/profiles/' + id + '/videos'} children={<Text code="MENU_PROFILE_VIDEOS" />} />
                    </div>
                </Menu.Item>
                <Menu.Item>
                    <div>
                        <Icon type="environment" />
                        <Link to={'/profiles/' + id + '/map'} children={<Text code="MENU_PROFILE_MAP" />} />
                    </div>
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
