/**
 * Created by Kelvin Ishigo on 10/3/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {ShoppingTypes} from '../actions/ActionTypes';

const shopping = (state = [], action) => {
	switch (action.type) {
		case ShoppingTypes.ADD_ITEM:
			return [
				...state,
				{
					id: state.length,
					item: action.item,
					selected: false
				}
			];
		case ShoppingTypes.COMPLETE_ITEM:
			return state.map(item =>
				(item.id === action.id)
					? {...item, selected: !item.selected}
					: item
			);
		case ShoppingTypes.DELETE_ITEM:
		default:
			return state;
	}
};

export default recipes