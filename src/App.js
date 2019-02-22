import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
	BrowserRouter as Router,
	Redirect
} from 'react-router-dom'
import { Layout } from 'antd'

import 'antd/dist/antd.css'
import './App.css'

import store from './store'

import * as DataService from './services/data'
import * as db from './services/db'

import Content from './components/Content'
import Header from './components/Header'
import Sider from './components/Sider'

Object.assign(window, {
	DataService,
	store
})

class App extends Component {
	async componentDidMount() {}
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
						{false && <Redirect to="/" />}
					</div>
				</Router>
			</Provider>
		)
	}
}

export default App
