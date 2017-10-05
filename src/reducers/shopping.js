/**
 * Created by Kelvin Ishigo on 10/3/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {ShoppingTypes} from '../actions/ActionTypes';
/**
 * applies actions on the slice of state which is the array of shoppingItems
 * @param state - array of shoppingItems
 * @param action - supported actions for this state slice
 * @returns {*} - new state or unchanged original
 */
const shoppingItems = (state = [], action) => {
	switch (action.type) {
		case ShoppingTypes.ADD_ITEM:
			// This defines the actual shape of the state item in the array
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
			// find the item and toggle the completed flag
			return state.map(item =>
				(item.id === action.id)
					? {...item, completed: !item.completed}
					: item
			);
		case ShoppingTypes.DELETE_ITEM:
			return state.filter((item) => (item.id !== action.id));
		case ShoppingTypes.DELETE_COMPLETED_ITEMS:
			return state.filter((item) => (!item.completed));
		default:
			return state;
	}
};

export default shoppingItems