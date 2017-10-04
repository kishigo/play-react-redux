/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AddTodo from '../containers/AddTodo'
import TodoFooter from './TodoFooter'
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleRecipeList from '../containers/VisibleRecipeList'
import VisibleShoppingList from '../containers/VisibleShoppingList'
import RecipeFooter from './RecipeFooter'
import AddRecipe from '../containers/AddRecipe'
import AddShoppingItem from '../containers/AddShoppingItem'
/**
 * Create Home page
 * @param props contains changePage for button
 * @constructor
 */
const Home = props => (
	<div>
		<h1>Recipes</h1>
		<AddRecipe />
		<VisibleRecipeList />
		<RecipeFooter />
		<h2>Shopping List</h2>
		<AddShoppingItem/>
		<VisibleShoppingList/>
		<h2>Things to do</h2>
		<AddTodo />
		<VisibleTodoList />
		<TodoFooter />
		<button onClick={() => props.changePage()}>Go to about page via redux</button>
	</div>
);
/**
 * Not quite sure of all that's going on here.  Dive deeper
 * @param dispatch
 */
const mapDispatchToProps = dispatch => bindActionCreators({
	changePage: () => push('/about-us')
}, dispatch);
/**
 * connect for routing
 */
export default connect(
	null,
	mapDispatchToProps
)(Home)
