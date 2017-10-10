/**
 * Created by Kelvin Ishigo on 10/3/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {IngredientTypes} from '../actions/ActionTypes';
/**
 * applies actions on the slice of state which is the array of ingredientItems
 * @param state - array of ingredientItems
 * @param action - supported actions for this state slice
 * @returns {*} - new state or unchanged original
 */
const ingredientItems = (state = [], action) => {
	switch (action.type) {
		case IngredientTypes.ADD_ITEM:
			// This defines the actual shape of the state item in the array
			return [
				...state,
				{
					id: action.id,
					name: action.item.name,
					qty: action.item.qty,
					item: action.item,
					completed: false
				}
			];
		case IngredientTypes.COMPLETE_ITEM:
			// find the item and toggle the completed flag
			return state.map(item =>
				(item.id === action.id)
					? {...item, completed: !item.completed}
					: item
			);
		case IngredientTypes.DELETE_ITEM:
			// filter out a single item
			return state.filter((item) => (item.id !== action.id));
		case IngredientTypes.DELETE_COMPLETED_ITEMS:
			// filter out all completed items
			return state.filter((item) => (!item.completed));
		case IngredientTypes.CLEAR_LIST:
			// return empty list
			return [];
		default:
			return state;
	}
};

export default ingredientItems;