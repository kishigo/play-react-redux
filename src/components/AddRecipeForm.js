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
		this.state = {recipeId: 0, ingredients : []};
		console.log('AddRecipeForm.constructor: state: ' + this.state);
	}
	
	/**
	 * callback from the AddIngredient presentational component
	 * currently set up for local state.  If we wanted to use redux, we would use a passed in
	 * function from a container that would dispatch, or we might turn this into a container
	 * by going pure functional and enhancing the function via the redux connect() transformer
	 * @param ingredient
	 */
	addIngredient = (ingredient) => {
		console.log('addIngredient: qty: ' + ingredient.qty + ' | item: ' + ingredient.name + ' | type: ' + ingredient.type );
		this.setState((prevState, props) => {
			console.log('prevState: ' + prevState + ', props: ' + props);
			ingredient = {...ingredient, id: prevState.recipeId, selected: false};
			return {
				recipeId: prevState.recipeId++,
				ingredients: prevState.ingredients.concat([ingredient])
			};
		});
		// this.state.ingredients = this.state.ingredients.concat([ingredient]);
		console.log('this.state: id: ' + this.state.recipeId + ' | ingredients: ' + this.state.ingredients.length);
	};
	
	markIngredient = (id) => {
		console.log('markIngredient[' + id + ']');
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
				<input id="upload" ref="upload" type="file" accept="image/*"
				       onChange={(event)=> {
					       this.readFile(event)
				       }}
				       onClick={(event)=> {
					       event.target.value = null
				       }}
				
				/>
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
