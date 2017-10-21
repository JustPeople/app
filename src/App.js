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
					<Profiles />
				</div>
			</Provider>
		)
	}
}

export default App
