import React, { Component } from 'react'
import './popup.css'

export default class PopUp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isChecked: false
		}
	}
	renderFeelingsAdded = feelings => {
		return feelings.map((feeling, index) => {
			return (
				<span key={index} className={'tag ' + feeling}>
					{feeling}
				</span>
			)
		})
	}

	renderCategoriesAdded = categories => {
		return categories.map((category, index) => {
			return (
				<span key={index} className="tag category">
					{category}
				</span>
			)
		})
	}

	render() {
		return (
			<div className="popup">
				<h3>Titre: {this.props.song.title || ''}</h3>
				<h3>Feelings:</h3>
				<div className="feelings-popup">
					{this.renderFeelingsAdded(this.props.song.feelings)}
				</div>
				<h3>Categories:</h3>
				<div className="categories-popup">
					{this.renderCategoriesAdded(this.props.song.categories)}
				</div>
				<h3>Plateforme(s):</h3>
				<div className="plateformes-popup">
					{this.props.song.youtube && (
						<span className="tag youtube">Youtube</span>
					)}

					{this.props.song.spotify && (
						<span className="tag spotify">Spotify</span>
					)}

					{this.props.song.deezer && <span className="tag deezer">Deezer</span>}

					{this.props.song.appleMusic && (
						<span className="tag apple-music">Apple Music</span>
					)}
				</div>
				<label>
					Photo?
					<input type="checkbox" checked={this.props.song.isChecked} />
				</label>
			</div>
		)
	}
}
