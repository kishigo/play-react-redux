/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import { connect } from 'react-redux'
import { highlightRecipe } from '../actions'
import GenericList from '../components/GenericList'

const getVisibleRecipes = (recipes, filter) => {
	// Create properly shaped list
	// {id, text, selected} from inbound state {id, title, completed}
	let newRecipes = recipes.map(recipe => ({id: recipe.id, text: recipe.title, selected: recipe.selected}));
	return newRecipes;
};

const mapStateToProps = state => {
	return {
//		recipes: getVisibleRecipes(state.recipes, state.filter)
		items: getVisibleRecipes(state.recipes, state.filter)
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onItemClick: (id, selected) => {
			dispatch(highlightRecipe(id, selected));
		}
	}
};

const VisibleRecipeList = connect(
	mapStateToProps,
	mapDispatchToProps
)(GenericList);

export default VisibleRecipeList