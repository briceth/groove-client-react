import React, { Component } from 'react'
import './popup.css'

export default class PopUp extends Component {
	render() {
		return (
			<div className="popup">
				<h3>Titre: Joe Smooth - Promised Land</h3>
				<h3>Feelings:</h3>
				<div className="feelings-popup">
					<span className="tag chill-music">chill-music</span>
					<span className="tag random-music">random-music</span>
					<span className="tag fun-music">fun-music</span>
					<span className="tag emotional-music">emotional-music</span>
				</div>
				<h3>Categories:</h3>
				<div className="categories-popup">
					<span className="tag category">alternative</span>
					<span className="tag category">rap us</span>
					<span className="tag category">variété française</span>
				</div>
				<h3>Plateforme(s):</h3>
				<div className="plateformes-popup">
					<span className="tag youtube">Youtube</span>
					<span className="tag spotify">Spotify</span>
					<span className="tag deezer">Deezer</span>
					<span className="tag apple-music">Apple Music</span>
				</div>
			</div>
		)
	}
}
