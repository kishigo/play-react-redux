/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'
/**
 * Presentational component for an Ingredient in the IngredientList
 * @param onClick
 * @param selected
 * @param text
 * @constructor
 */
const Ingredient = ({onClick, ingredient}) => {
	return(
	<li onClick={onClick}
	    style={{textDecoration: ingredient.selected ? 'line-through' : 'none'}}>
		{ingredient.qty + ' - ' + ingredient.name + ' - ' + ingredient.type}
	</li>
)};
/**
 * defines the required shape of the item
 * @type {{onClick: *, selected: *, text: *}}
 */
Ingredient.propTypes = {
	// onClick: PropTypes.func.isRequired,
	ingredient: PropTypes.shape({
		qty: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		selected: PropTypes.bool.isRequired
	}).isRequired
	
};

export default Ingredient