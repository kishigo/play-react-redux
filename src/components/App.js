/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleRecipeList from '../containers/VisibleRecipeList'
import RecipeFooter from './RecipeFooter'
import AddRecipe from '../containers/AddRecipe'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'

let testRoute = true;
const App = (testRoute) ? () => (
	<div>
		<header>
			<Link to="/">Home</Link>
			<Link to="/about-us">About</Link>
		</header>
		<main>
			<Route exact path="/" component={Home}/>
			<Route exact path="/about-us" component={About}/>
		</main>
	</div>
) : () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
		<AddRecipe />
		<VisibleRecipeList />
		<RecipeFooter />
	</div>
);
/*
if (testRoute) {
	const App = () => (
		<div>
			<header>
				<Link to="/">Home</Link>
				<Link to="/about-us">About</Link>
			</header>
			<main>
				<Route exact path="/" component={Home}/>
				<Route exact path="/about-us" component={About}/>
			</main>
		</div>
	);
}
else {
	const App = () => (
		<div>
			<AddTodo />
			 <VisibleTodoList />
			 <Footer />
			 <AddRecipe />
			 <VisibleRecipeList />
			 <RecipeFooter />
		</div>
	);
}
*/
export default App;
