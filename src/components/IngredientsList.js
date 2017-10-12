/**
 * Created by Kelvin Ishigo on 10/10/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Ingredient from './Ingredient'
/**
 * Stateless react component defined as a functional component
 * http://www.zsoltnagy.eu/container-components-and-stateless-functional-components-in-react/
 * 
 * @param ingredients
 * @param onItemClick
 * @constructor
 */
const IngredientsList = ({ingredients, onItemClick}) => (
	<ul>
		{ingredients.map(ingredient => (
				<Ingredient key={ingredient.id} ingredient={ingredient} onClick={() => onItemClick(ingredient.id)}/>
			))}
	</ul>
);

/**
 * defines the required shape
 * @type {{items: *, onItemClick: *}}
 */
IngredientsList.propTypes = {
	ingredients: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			qty: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			selected: PropTypes.bool.isRequired
		}).isRequired
	).isRequired,
	onItemClick: PropTypes.func.isRequired
};

export default IngredientsList