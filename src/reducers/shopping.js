/**
 * Created by Kelvin Ishigo on 10/3/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {ShoppingTypes} from '../actions/ActionTypes';

const shoppingItems = (state = [], action) => {
	switch (action.type) {
		case ShoppingTypes.ADD_ITEM:
			return [
				...state,
				{
					id: action.id,
					name: action.item.name,
					qty: action.item.qty,
					market: action.item.market,
					item: action.item,
					completed: false
				}
			];
		case ShoppingTypes.COMPLETE_ITEM:
			return state.map(item =>
				(item.id === action.id)
					? {...item, completed: !item.completed}
					: item
			);
		case ShoppingTypes.DELETE_ITEM:
		default:
			return state;
	}
};

export default shoppingItems