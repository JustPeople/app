import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'

import store from './store'

import * as DataService from './services/data'

import Profiles from './components/Profiles'

Object.assign(window, {
	DataService,
	store
})

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Profiles />
				</div>
			</Provider>
		)
	}
}

export default App
