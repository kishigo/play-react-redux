/**
 * Created by Kelvin Ishigo on 10/3/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import { connect } from 'react-redux'
import { completeShoppingItem } from '../actions'
import GenericList from '../components/GenericList'
import {ShoppingTypes} from '../actions/ActionTypes'

const buildTextPart = item => (item.qty + ' - ' + item.name + ' @ ' + item.market);
const buildItem = item => ({id: item.id, text: buildTextPart(item), selected: item.completed, market: item.market});
const compareByMarket = (a, b) => {
	if (a.market < b.market) {
		return -1;
	}
	else if (a.market > b.market) {
		return 1;
	}
	return 0;
};
/**
 * map filter over shoppingItems
 * @param shoppingItems
 * @param filter
 * @returns {*}
 */
const getVisibleShoppingItems = (shoppingItems, filter) => {
	switch (filter) {
		case ShoppingTypes.SHOW_ALL:
			return shoppingItems.map(item => (buildItem(item))).sort(compareByMarket);
		case ShoppingTypes.SHOW_COMPLETED:
			return shoppingItems.filter(t => t.completed).map(item => (buildItem(item))).sort(compareByMarket);
		case ShoppingTypes.SHOW_ACTIVE:
			return shoppingItems.filter(t => !t.completed).map(item => (buildItem(item))).sort(compareByMarket);
		default:
			return shoppingItems.map(item => (buildItem(item))).sort(compareByMarket);
	}
};
/**
 * api entry
 * @param state
 * @returns {{shoppingItems: *}}
 */
const mapStateToProps = state => {
	return {
		items: getVisibleShoppingItems(state.shoppingItems, state.shoppingVisibilityFilter)
	}
};
/**
 * api entry
 * @param state
 * @returns {{shoppingItems: *}}
 */
const mapDispatchToProps = dispatch => {
	return {
		onItemClick: (id, selected) => {
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
)(GenericList);

export default VisibleShoppingList