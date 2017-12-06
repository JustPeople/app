import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import { Layout } from 'antd'

import 'antd/dist/antd.css'
import './App.css'

import store from './store'

import * as DataService from './services/data'

import Header from './components/Header'
import Sider from './components/Sider'
import Content from './components/Content'

Object.assign(window, {
	DataService,
	store
})

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Layout style={{ minHeight: '100vh' }}>
							<Header />
							<Layout>
								<Sider />
								<Content />
							</Layout>
						</Layout>
					</div>
				</Router>
			</Provider>
		)
	}
}

export default App
