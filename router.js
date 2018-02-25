import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import ListSongs from './src/views/ListSongs'

const Routing = () => (
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route path="/songs" component={ListSongs} />
		</div>
	</Router>
)
export default Routing
