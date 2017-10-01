/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import { connect } from 'react-redux'
import RecipeList from '../components/RecipeList'

const getVisibleRecipes = (recipes, filter) => {
	return recipes;
};

const mapStateToProps = state => {
	return {
		recipes: getVisibleRecipes(state.recipes, state.filter)
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onRecipeClick: id => {
			dispatch();
		}
	}
};

const VisibleRecipeList = connect(
	mapStateToProps,
	mapDispatchToProps
)(RecipeList);

export default VisibleRecipeList