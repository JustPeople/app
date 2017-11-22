import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Layout } from 'antd'

import 'antd/dist/antd.css'
import './App.css'

import store from './store'

import * as DataService from './services/data'

import ProfileListFilters from './containers/ProfileListFilters'
import Profiles from './components/Profiles'

var { Header, Content, Sider } = Layout

Object.assign(window, {
	DataService,
	store
})

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Layout style={{ minHeight: '100vh' }}>
						<Header>
						</Header>
						<Layout>
							<Sider>
								<ProfileListFilters />
							</Sider>
							<Content>
								<Profiles />
							</Content>
						</Layout>
					</Layout>
				</div>
			</Provider>
		)
	}
}

export default App
