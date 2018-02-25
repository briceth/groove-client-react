import React, { Component } from 'react'
import axios from 'axios'
import './list-songs.css'
import Navbar from '../components/navbar'

export default class ListSongs extends Component {
	constructor() {
		super()

		this.state = {
			songs: []
		}
	}

	componentDidMount() {
		axios
			.get('https://groove-api-node-js.herokuapp.com/api/songs')
			.then(response => {
				console.log(response.data)
				this.setState({ songs: response.data })
			})
	}

	renderCategories = categories => {
		return categories.map((category, index) => {
			return (
				<span key={index} className="tag category">
					{category.genre}
				</span>
			)
		})
	}

	renderPlatefoms = urls => {
		return urls.map((url, index) => {
			if (url.url != '') {
				return (
					<span key={index} className={'tag plateform ' + url.plateform}>
						{url.plateform.split('')[0]}
					</span>
				)
			}
		})
	}

	renderFeelings = feelings => {
		return feelings.map((feeling, index) => {
			return (
				<span key={index} className={'tag ' + feeling.feeling}>
					{feeling.feeling}
				</span>
			)
		})
	}

	renderSongs = songs => {
		return songs.map((song, index) => {
			return (
				<div key={index} className="song">
					<div
						className="song-photo"
						style={{ backgroundImage: `url(${song.photo})` }}
					>
						<div className="espace tag-img">
							{this.renderFeelings(song.feelings)}
						</div>

						<div className="meta">
							<div className="espace">
								<p>{song.meta.likes}</p>
								<i className="far fa-heart" />
							</div>
							<div className="espace">
								<p>{song.meta.dislikes}</p>
								<i className="far fa-thumbs-down" />
							</div>
						</div>
					</div>
					<h3 className="h3-card">{song.title}</h3>

					<div className="espace">{this.renderCategories(song.categories)}</div>
					<div className="espace">{this.renderPlatefoms(song.urls)}</div>
				</div>
			)
		})
	}

	render() {
		return (
			<div>
				<Navbar />
				<div className="container">
					<div className="list-songs">{this.renderSongs(this.state.songs)}</div>
				</div>
			</div>
		)
	}
}
