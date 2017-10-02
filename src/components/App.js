/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'

const App = () => (
	<div>
		<header>
			<Link to="/">Home</Link>
			:
			<Link to="/about-us">About</Link>
		</header>
		<main>
			<Route exact path="/" component={Home}/>
			<Route exact path="/about-us" component={About}/>
		</main>
	</div>
);
export default App;
