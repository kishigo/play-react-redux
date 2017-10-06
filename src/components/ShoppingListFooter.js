/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import ShoppingListFilterLink from '../containers/ShoppingListFilterLink'
import { ShoppingTypes } from '../actions/ActionTypes'
/**
 * Component constructor for Shopping List filter
 * @constructor
 */
const ShoppingListFooter = () => (
	<p>
		Show:
		{' '}
		<ShoppingListFilterLink filter={ShoppingTypes.SHOW_ALL}>
			All
		</ShoppingListFilterLink>
		{', '}
		<ShoppingListFilterLink filter={ShoppingTypes.SHOW_ACTIVE}>
			Active
		</ShoppingListFilterLink>
		{', '}
		<ShoppingListFilterLink filter={ShoppingTypes.SHOW_COMPLETED}>
			Completed
		</ShoppingListFilterLink>
	</p>
);

export default ShoppingListFooter