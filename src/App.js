import React, { Component } from 'react'
import { Provider } from 'react-redux'
import logo from './logo.svg'
import './App.css'

import store from './store'

import Profiles from './components/Profiles'

window.store = store

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Welcome to React</h1>
					</header>
					<p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
					<div style={{ padding: '1rem' }}>
						<Profiles />
					</div>
				</div>
			</Provider>
		)
	}
}

export default App
