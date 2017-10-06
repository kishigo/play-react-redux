/**
 * Created by Kelvin Ishigo on 10/3/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import { connect } from 'react-redux'
import { completeShoppingItem } from '../actions'
import ShoppingList from '../components/ShoppingList'
import {ShoppingTypes} from '../actions/ActionTypes'

/**
 * map filter over shoppingItems
 * @param shoppingItems
 * @param filter
 * @returns {*}
 */
const getVisibleShoppingItems = (shoppingItems, filter) => {
	switch (filter) {
		case ShoppingTypes.SHOW_ALL:
			return shoppingItems;
		case ShoppingTypes.SHOW_COMPLETED:
			return shoppingItems.filter(t => t.completed);
		case ShoppingTypes.SHOW_ACTIVE:
			return shoppingItems.filter(t => !t.completed);
		default:
			return shoppingItems;
	}
};
/**
 * api entry
 * @param state
 * @returns {{shoppingItems: *}}
 */
const mapStateToProps = state => {
	return {
		shoppingItems: getVisibleShoppingItems(state.shoppingItems, state.shoppingVisibilityFilter)
	}
};
/**
 * api entry
 * @param state
 * @returns {{shoppingItems: *}}
 */
const mapDispatchToProps = dispatch => {
	return {
		onShoppingItemClick: (id, selected) => {
			dispatch(completeShoppingItem(id, selected));
		}
	}
};
/**
 * redux api for connection
 */
const VisibleShoppingList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ShoppingList);

export default VisibleShoppingList