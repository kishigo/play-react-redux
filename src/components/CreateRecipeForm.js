/**
 * Created by Kelvin Ishigo on 10/4/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
/**
 * Use class method of creating presentational component
 */
class CreateRecipeForm extends React.Component {
	/**
	 * augment object with ingredients and initialize to silly value
	 * so we can test correctness
	 */
	componentWillMount() {
		this.ingredients = ['b', 'c'];
	}
	
	/**
	 * must be furnished, here let's test our ability to get at this.ingredients
	 * with a statically bound fat arrow function
	 * @returns {XML}
	 */
	render() {
		// use fat arrow function to bind this statically
		let getIngredients = () => (this.ingredients);
		console.log('ingredients: ' + getIngredients());
		return (
			<div>
				<h1>Create Recipe Form</h1>
			</div>
		)
	}
}
export default CreateRecipeForm