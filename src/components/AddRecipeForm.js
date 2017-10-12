/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import AddIngredientItem from './AddIngredientItem'
import VisibleIngredientsList from '../containers/VisibleIngredientsList'
import IngredientsList from './IngredientsList'
import TestIngredientsList from './TestIngredientsList'

/**
 * Use class method of creating presentational component
 */
class AddRecipeForm extends React.Component {
	constructor() {
		super();
		this.state = {recipeId: -1, ingredients : []};
		console.log('AddRecipeForm.constructor: state: ' + this.state);
	}
	/**
	 * augment object with ingredients and initialize to silly value
	 * so we can test correctness
	 */
	componentWillMount() {
		this.ingredients = [{qty: '1C', name: 'Flour', type: 'any', selected: false}];
	}
	
	addIngredient = (ingredient) => {
		console.log('addIngredient: qty: ' + ingredient.qty + ' | item: ' + ingredient.name + ' | type: ' + ingredient.type );
		this.setState((prevState, props) => {
			console.log('prevState: ' + prevState + ', props: ' + props);
			return {
				ingredients: prevState.ingredients.concat([ingredient])
			};
		});
		// this.state.ingredients = this.state.ingredients.concat([ingredient]);
		console.log('this.state: id: ' + this.state.recipeId + ' | ingredients: ' + this.state.ingredients.length);
	};
	
	markIngredient = (id) => {
		console.log('markIngredient');
	};
	
	/**
	 * must be furnished, here let's test our ability to get at this.ingredients
	 * with a statically bound fat arrow function
	 * @returns {XML}
	 */
	render() {
		return (
			<div>
				<h1>Add Recipe Form</h1>
				<AddIngredientItem onSubmitIngredient={this.addIngredient} ingredients={this.state.ingredients}/>
				<IngredientsList ingredients={this.state.ingredients} onItemClick={this.markIngredient}/>
				<TestIngredientsList ingredients={this.state.ingredients} onItemClick={this.markIngredient}/>
				{/*<VisibleIngredientsList/>*/}
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
