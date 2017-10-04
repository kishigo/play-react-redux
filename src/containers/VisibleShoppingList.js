/**
 * Created by Kelvin Ishigo on 10/3/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import { connect } from 'react-redux'
import { completeShoppingItem } from '../actions'
import ShoppingList from '../components/ShoppingList'

const getVisibleShoppingItems = (shoppingItems, filter) => {
	return shoppingItems;
};

const mapStateToProps = state => {
	return {
		shoppingItems: getVisibleShoppingItems(state.shoppingItems, state.filter)
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onShoppingItemClick: (id, selected) => {
			dispatch(completeShoppingItem(id, selected));
		}
	}
};

const VisibleShoppingList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ShoppingList);

export default VisibleShoppingList