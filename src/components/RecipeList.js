/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Recipe from './Recipe'

const RecipeList = ({ recipes, onRecipeClick }) => (
	<ul>
		{recipes.map(recipe => (
			<Recipe key={recipe.id} {...recipe} onClick={() => onRecipeClick(recipe.id)} />
		))}
	</ul>
);

RecipeList.propTypes = {
	recipes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			selected: PropTypes.bool.isRequired
		}).isRequired
	).isRequired,
	onRecipeClick: PropTypes.func.isRequired
};

export default RecipeList