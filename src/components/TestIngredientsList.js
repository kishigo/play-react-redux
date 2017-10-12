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