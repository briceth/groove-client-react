import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default class Navbar extends Component {
	render() {
		return (
			<div className="navbar">
				<div className="logo">
					<Link to="/">Groove</Link>
				</div>
				<div>
					<input type="text" placeholder="search" className="search" />
				</div>
				<div className="navbar-actions">
					<Link to="/songs">songs</Link>
				</div>
			</div>
		)
	}
}
