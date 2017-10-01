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

const App = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
		<VisibleRecipeList />
		<RecipeFooter />
	</div>
);

export default App;
