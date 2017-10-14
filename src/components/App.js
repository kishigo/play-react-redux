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
import AddRecipeForm from './AddRecipeForm'
import EditRecipeForm from './EditRecipeForm'
import AddRecipeContainer from '../containers/AddRecipeContainer'
import EditRecipeContainer from '../containers/EditRecipeContainer'
import CreateRecipeForm from './CreateRecipeForm'

const App = () => (
	<div>
		<header>
			Links-->
			<Link to="/">Home</Link>
			|
			<Link to="/about-us">About</Link>
			|
			<Link to="/add-recipe-form">Add Recipe Form</Link>
			|
			<Link to="/create-recipe-form">Create Recipe Form</Link>
			|
			<Link to="/edit-recipe-form">Edit Recipe Form</Link>
		</header>
		<main>
			<Route exact path="/" component={Home}/>
			<Route exact path="/about-us" component={About}/>
			<Route exact path="/add-recipe-form" component={AddRecipeContainer}/>
			<Route exact path="/create-recipe-form" component={CreateRecipeForm}/>
			{/*<Route exact path="/edit-recipe-form" component={EditRecipeForm}/>*/}
			<Route exact path="/edit-recipe-form" component={EditRecipeContainer}/>
		</main>
	</div>
);
export default App;
