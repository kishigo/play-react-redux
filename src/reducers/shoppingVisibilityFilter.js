/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {ShoppingTypes} from '../actions/ActionTypes';

const shoppingVisibilityFilter = (state = ShoppingTypes.SHOW_ALL, action) => {
	switch (action.type) {
		case ShoppingTypes.SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
};

export default shoppingVisibilityFilter