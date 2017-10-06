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
import ShoppingListFooter from './ShoppingListFooter'
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleRecipeList from '../containers/VisibleRecipeList'
import VisibleShoppingList from '../containers/VisibleShoppingList'
import RecipeFooter from './RecipeFooter'
import AddRecipe from '../containers/AddRecipe'
import AddShoppingItem from '../containers/AddShoppingItem'
import {clearCompletedShoppingItems, clearShoppingList} from '../actions'

let myDispatch;

/**
 * Create Home page
 * @param props contains changePage for button
 * @constructor
 */
const Home = props => {
	console.log(props);
	return (
		<div>
			<h1>Recipes</h1>
			<AddRecipe />
			<VisibleRecipeList />
			<button onClick={() => props.gotoCreateRecipe()}>Go to create recipe page</button>
			<RecipeFooter />
			<h2>Shopping List</h2>
			<AddShoppingItem/>
			<button onClick={() => myDispatch(clearCompletedShoppingItems())}>Clear completed items</button>
			<button onClick={() => myDispatch(clearShoppingList())}>Clear shopping list</button>
			<VisibleShoppingList/>
			<ShoppingListFooter />
			<h2>Things to do</h2>
			<AddTodo />
			<VisibleTodoList />
			<TodoFooter />
			<button onClick={() => props.changePage()}>Go to about page via redux</button>
		</div>
	);
};
/**
 * Not quite sure of all that's going on here.  Dive deeper
 * @param dispatch
 */
const mapDispatchToProps = dispatch => {
	myDispatch = dispatch;
	return bindActionCreators({
		changePage: () => push('/about-us'),
		gotoCreateRecipe: () => push('/create-recipe-form')
	}, dispatch);
};
/**
 * connect for routing
 */
export default connect(
	null,
	mapDispatchToProps
)(Home)
