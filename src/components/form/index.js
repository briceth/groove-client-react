import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import './form.css'
import { CATEGORIES, FEELINGS } from './data'

export default class Form extends Component {
	constructor(props) {
		super(props)
	}

	renderCategories = () => {
		return CATEGORIES.map((category, index) => {
			return (
				<div key={index}>
					<input
						id="checkBox"
						type="checkbox"
						value={category}
						onChange={e => this.props.toggleCheckbox('categories', e)}
					/>
					<label>{category}</label>
				</div>
			)
		})
	}

	renderFeelings = () => {
		return FEELINGS.map((feeling, index) => {
			return (
				<div key={index}>
					<input
						id="checkBox"
						type="checkbox"
						value={feeling}
						onChange={e => this.props.toggleCheckbox('feelings', e)}
					/>
					<label>{feeling}</label>
				</div>
			)
		})
	}
	render() {
		return (
			<div className="form-wrapper">
				<form onSubmit={this.props.handleSubmit}>
					<input
						type="text"
						placeholder="titre de la chanson"
						value={this.props.song.title}
						onChange={e => this.props.handleChange('title', e)}
					/>
					<h3>Choisis les "feelings":</h3>
					<div className="feelings-wrapper">{this.renderFeelings()}</div>
					<h3>Choisis les catégories:</h3>
					<div className="categories-wrapper">{this.renderCategories()}</div>
					<input
						type="text"
						placeholder="Youtube"
						value={this.props.song.youtube}
						onChange={e => this.props.handleChange('youtube', e)}
					/>
					<input
						type="text"
						placeholder="Spotify"
						value={this.props.song.spotify}
						onChange={e => this.props.handleChange('spotify', e)}
					/>
					<input
						type="text"
						placeholder="Deezer"
						value={this.props.song.deezer}
						onChange={e => this.props.handleChange('deezer', e)}
					/>
					<input
						type="text"
						placeholder="Apple Music"
						value={this.props.song.appleMusic}
						onChange={e => this.props.handleChange('appleMusic', e)}
					/>
					<Dropzone onDrop={this.props.onDrop} className="upload-wrapper">
						<p>
							Try dropping some files here, or click to select files to upload.
						</p>
					</Dropzone>
					<aside>
						<p>Dropped files</p>
						<ul>
							{this.props.song.files.map(f => (
								<li key={f.name}>
									{f.name} - {f.size} bytes
								</li>
							))}
						</ul>
					</aside>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
}
