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
import RecipeGalleryContainer from '../containers/RecipeGalleryContainer'
import HeroContainer from '../containers/HeroContainer'
import PillButtonContainer from '../containers/PillButtonContainer'
import ImageRowTestContainer from "../containers/ImageRowTestContainer"
import MDPTestContainer from "../containers/MDPTestContainer"

const App = () => (
	<div>
		<header>
			NAV-->
			<Link to="/"><img src="favicon.ico" alt="wtf"/></Link>
			|
			<Link to="/about-us">About</Link>
			|
			<Link to="/add-recipe-form">Add Recipe Form</Link>
			|
			<Link to="/create-recipe-form">Create Recipe Form</Link>
			|
			<Link to="/edit-recipe-form">Edit Recipe Form</Link>
			|
			<Link to="/recipe-gallery">Recipe Gallery</Link>
			|
			<Link to="/image-row-test">Image Row Test</Link>
			|
			<Link to="/hero-test">Hero Test</Link>
			|
			<Link to="/pill-test">Pill Test</Link>
			|
			<Link to="/mdp-test">MDPTest</Link>
		</header>
		<main>
			<Route exact path="/" component={Home}/>
			<Route exact path="/about-us" component={About}/>
			<Route exact path="/add-recipe-form" component={AddRecipeContainer}/>
			<Route exact path="/create-recipe-form" component={CreateRecipeForm}/>
			{/*<Route exact path="/edit-recipe-form" component={EditRecipeForm}/>*/}
			<Route exact path="/edit-recipe-form" component={EditRecipeContainer}/>
			<Route exact path="/recipe-gallery" component={RecipeGalleryContainer}/>
			<Route exact path="/image-row-test" component={ImageRowTestContainer}/>
			<Route exact path="/hero-test" render={(props) => (<HeroContainer {...props} pass_to_page_content={'hi'}/>)}/>
			<Route exact path="/pill-test" component={PillButtonContainer}/>
			<Route exact path="/mdp-test" component={MDPTestContainer}/>
		</main>
	</div>
);
export default App;

//			<Route exact path="/hero-test" component={HeroContainer}/>
