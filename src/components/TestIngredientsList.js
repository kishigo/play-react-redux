/**
 * Created by Kelvin Ishigo on 10/11/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import Ingredient from './Ingredient'
/**
 * Learning... by inheriting from React.Component, this will have state and props
 * Passing args to the jsx <TestIngredientsList xxx={foo} yyy={bar}/> => this.props.xxx, this.props.yyy
 * NOTE: This is inefficient for a stateless React component and the pure functional form is preferred
 * see IngredientsList.js and its usage in AddRecipeForm.js where it is driven by local state in AddRecipeForm.
 * Then see usage in VisibleIngredientsList.js where it is driven by redux state.
 */
class TestIngredientsList extends React.Component {
	render() {
		console.log('render');
		return (
			<ul>
				{this.props.ingredients.map(ingredient => (
					<Ingredient key={ingredient.id} ingredient={ingredient} onClick={() => this.props.onItemClick(ingredient.id)}/>
				))}
			</ul>
		)
	}
}
export default TestIngredientsList