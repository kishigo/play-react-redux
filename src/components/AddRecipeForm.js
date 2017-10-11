/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import VisibleIngredientsList from '../containers/VisibleIngredientsList'

/**
 * Use class method of creating presentational component
 */
class AddRecipeForm extends React.Component {
	constructor() {
		super();
		this.state = {ingredients : []};
	}
	/**
	 * augment object with ingredients and initialize to silly value
	 * so we can test correctness
	 */
	componentWillMount() {
		this.ingredients = [{qty: '1C', name: 'Flour', type: 'any', selected: false}];
	}
	
	/**
	 * must be furnished, here let's test our ability to get at this.ingredients
	 * with a statically bound fat arrow function
	 * @returns {XML}
	 */
	render() {
		return (
			<div>
				<h1>Add Recipe Form</h1>
				<VisibleIngredientsList/>
			</div>
		)
	}
}
// const AddRecipeForm = () => (
// 	<div>
// 		<h1>Add Recipe Form</h1>
// 		<VisibleIngredientsList/>
// 	</div>
// );
export default AddRecipeForm
