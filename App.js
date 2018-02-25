import React, { Component } from 'react'
import Form from './src/components/form'
import PopUp from './src/components/popUp'
import Navbar from './src/components/navbar'

export default class App extends Component {
	constructor() {
		super()
		this.state = {
			files: [],
			title: '',
			feelings: [],
			categories: [],
			youtube: '',
			spotify: '',
			deezer: '',
			appleMusic: '',
			isChecked: false
		}
	}

	toggleCheckbox = (key, label) => {
		if (this.state[key].includes(label.target.value)) {
			//console.log('delete checkbox')
			for (let i = 0; i < this.state[key].length; i++) {
				const element = this.state[key][i]
				if (element === label.target.value) {
					//console.log('element', element)
					this.setState(
						{
							[key]: [
								...this.state[key].slice(0, i),
								...this.state[key].slice(i + 1)
							]
						},
						() => {
							console.log(`element ${element} has been removed`)
						}
					)
				}
			}
		} else {
			//console.log('had checkbox')
			this.setState({ [key]: [...this.state[key], label.target.value] }, () => {
				console.log('element', this.state[key])
			})
		}
	}

	onDrop = files => {
		this.setState(
			{
				files
			},
			() => {
				this.setState({ isChecked: !this.state.isChecked })
			}
		)
	}

	handleSubmit = e => {
		e.preventDefault()
		console.log('handlesubmit', e.target.value)
	}

	handleChange = (key, e) => {
		console.log('handleChange', e.target.value)
		this.setState(
			{
				[key]: e.target.value
			},
			() => {
				console.log('new state', this.state)
			}
		)
	}

	render() {
		return (
			<div>
				<Navbar />
				<div className="container">
					<Form
						handleSubmit={this.handleSubmit}
						handleChange={this.handleChange}
						song={this.state}
						onDrop={this.onDrop}
						toggleCheckbox={this.toggleCheckbox}
					/>
					<PopUp song={this.state} />
				</div>
			</div>
		)
	}
}
