/**
 * Created by Kelvin Ishigo on 10/3/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'
import ShoppingItem from './ShoppingItem'

const ShoppingList = ({ shoppingItems, onShoppingItemClick }) => (
	<ul>
		{shoppingItems.map(shoppingItem => (
			<ShoppingItem key={shoppingItem.id} {...shoppingItem} onClick={() => onShoppingItemClick(shoppingItem.id)} />
		))}
	</ul>
);

ShoppingList.propTypes = {
	shoppingItems: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired
		}).isRequired
	).isRequired,
	onShoppingItemClick: PropTypes.func.isRequired
};

export default ShoppingList