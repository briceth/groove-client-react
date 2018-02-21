import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import './form.css'

export default class Form extends Component {
	constructor() {
		super()
		this.state = {
			files: []
		}
		this.onDrop = this.onDrop.bind(this)
	}

	onDrop(files) {
		this.setState({
			files
		})
	}

	renderCategories() {
		const categories = [
			'alternative',
			'variété française',
			'soul',
			'rap',
			'rap us',
			'rap fr',
			'jazz',
			'gospel',
			'disco',
			'deep',
			'techno',
			'funk',
			'rock',
			'r&b',
			'commercial',
			'house',
			'reggae',
			'autres'
		]

		return categories.map((category, index) => {
			return (
				<div key={index}>
					<input id="checkBox" type="checkbox" value={category} />
					<label>{category}</label>
				</div>
			)
		})
	}

	renderFeelings() {
		const feelings = [
			'chill-music',
			'party-music',
			'random-music',
			'fun-music',
			'emotional-music'
		]

		return feelings.map((feeling, index) => {
			return (
				<div key={index}>
					<input id="checkBox" type="checkbox" value={feeling} />
					<label>{feeling}</label>
				</div>
			)
		})
	}
	render() {
		return (
			<div className="form-wrapper">
				<form>
					<input type="text" placeholder="titre de la chanson" />
					<h3>Choisis les "feelings":</h3>
					<div className="feelings-wrapper">{this.renderFeelings()}</div>
					<h3>Choisis les catégories:</h3>
					<div className="categories-wrapper">{this.renderCategories()}</div>
					<input type="text" placeholder="Youtube" />
					<input type="text" placeholder="Spotify" />
					<input type="text" placeholder="Deezer" />
					<input type="text" placeholder="Apple Music" />
					<Dropzone onDrop={this.onDrop} className="upload-wrapper">
						<p>
							Try dropping some files here, or click to select files to upload.
						</p>
					</Dropzone>
					<aside>
						<p>Dropped files</p>
						<ul>
							{this.state.files.map(f => (
								<li key={f.name}>
									{f.name} - {f.size} bytes
								</li>
							))}
						</ul>
					</aside>
					<button type="submit">Ho Yeah !</button>
				</form>
			</div>
		)
	}
}
