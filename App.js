import React, { Component } from 'react'
import Form from './src/components/form'
import PopUp from './src/components/popUp'

export default class App extends Component {
	constructor() {
		super()
		this.state = {}
	}
	render() {
		return (
			<div className="container">
				<Form />
				<PopUp />
			</div>
		)
	}
}
