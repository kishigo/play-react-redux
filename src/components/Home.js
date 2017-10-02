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
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleRecipeList from '../containers/VisibleRecipeList'
import RecipeFooter from './RecipeFooter'
import AddRecipe from '../containers/AddRecipe'

const Home = props => (
	<div>
		<h1>Home</h1>
		<p>Welcome home!</p>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
		<AddRecipe />
		<VisibleRecipeList />
		<RecipeFooter />
		<button onClick={() => props.changePage()}>Go to about page via redux</button>
	</div>
);

const mapDispatchToProps = dispatch => bindActionCreators({
	changePage: () => push('/about-us')
}, dispatch)

export default connect(
	null,
	mapDispatchToProps
)(Home)
