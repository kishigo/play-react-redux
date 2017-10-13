/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import AddIngredientItem from './AddIngredientItem'
import IngredientsList from './IngredientsList'
import KeywordList from './KeywordList'

/**
 * Use class method of creating presentational component
 */
class AddRecipeForm extends React.Component {
	constructor() {
		super();
		this.state = {recipeId: 0, ingredients: [], file: {}, keywordId: 0, keywords: [{id: 0, text: 'beef', selected: false}, {id: 1, text: 'main dish', selected: false}]};
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
		console.log('addIngredient: qty: ' + ingredient.qty + ' | item: ' + ingredient.name + ' | type: ' + ingredient.type);
		this.setState((prevState, props) => {
			console.log('prevState.recipeId: ' + prevState.recipeId + ', props: ' + props);
			// spread ingredients with new fields
			ingredient = {...ingredient, id: prevState.recipeId, selected: false};
			// spread update of selected fields
			return {
				...prevState,
					recipeId: ++prevState.recipeId,
					ingredients: prevState.ingredients.concat([ingredient])
				
			};
		});
		// this.state.ingredients = this.state.ingredients.concat([ingredient]);
		console.log('state: id: ' + this.state.recipeId + ' | ingredients: ' + this.state.ingredients.length + ', file: ' + this.state.file);
	};
	/**
	 * mark the ingredient as it was clicked.
	 * mark is selected true|false
	 * @param id
	 */
	markIngredient = (id) => {
		console.log('markIngredient[' + id + ']');
		this.setState((prevState, props) => {
			return {
				...prevState, ingredients: prevState.ingredients.map(ingredient =>
					(id === ingredient.id) ? {...ingredient, selected: !ingredient.selected}
					: ingredient)
			}
		});
	};
	/**
	 * mark the keyword as it was clicked.
	 * mark is selected true|false
	 * @param id
	 */
	markKeyword = (id) => {
		console.log('markKeyword[' + id + ']');
		this.setState((prevState, props) => {
			return {
				...prevState, keywords: prevState.keywords.map(keyword =>
					(id === keyword.id) ? {...keyword, selected: !keyword.selected}
						: keyword)
			}
		});
	};
	/**
	 * Update state with file
	 * @param file - object from input
	 */
	setFile = (file) => {
		this.setState((prevState, props) => {
			// spread update of selected fields
			return {
				...prevState, file: file
			}
		});
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
				<h2>Recipe File</h2>
				<input id="upload" ref="upload" type="file" accept="all/*"
				       onChange={(event) => {
					       // file will not have the path but if file is passed
					       // to a FileReader instance, it will do the right thing
					       let file = document.getElementById("upload").files[0];
					       console.log('file: ' + file);
					       this.setFile(file);
				       }}
				       onClick={(event) => {
					       event.target.value = null
				       }}
				
				/>
				<AddIngredientItem onSubmitIngredient={this.addIngredient} ingredients={this.state.ingredients}/>
				<IngredientsList ingredients={this.state.ingredients} onItemClick={this.markIngredient}/>
				<KeywordList items={this.state.keywords} onItemClick={this.markKeyword} horizontal={true}/>
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
