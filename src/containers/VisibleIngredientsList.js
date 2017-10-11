/**
 * Created by Kelvin Ishigo on 10/3/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import { connect } from 'react-redux'
import { completeIngredientItem } from '../actions'
import IngredientsList from '../components/IngredientsList'
import {IngredientTypes} from '../actions/ActionTypes'

const buildItem = item => ({id: item.id, qty: item.qty, name: item.name, selected: item.selected, type: item.type});
/**
 * map filter over ingredientItems
 * @param ingredientItems
 * @param filter
 * @returns {*}
 */
const getVisibleIngredientItems = (ingredientItems, filter) => {
	switch (filter) {
		case IngredientTypes.SHOW_ALL:
			return ingredientItems.map(item => (buildItem(item)));
		case IngredientTypes.SHOW_COMPLETED:
			return ingredientItems.filter(t => t.selected).map(item => (buildItem(item)));
		case IngredientTypes.SHOW_ACTIVE:
			return ingredientItems.filter(t => !t.selected).map(item => (buildItem(item)));
		default:
			return ingredientItems.map(item => (buildItem(item)));
	}
};
/**
 * api entry
 * @param state
 * @returns {{ingredientItems: *}}
 */
const mapStateToProps = state => {
	return {
		ingredients: getVisibleIngredientItems(state.ingredients, state.ingredientVisibilityFilter)
	}
};
/**
 * api entry
 * @param state
 * @returns {{ingredientItems: *}}
 */
const mapDispatchToProps = dispatch => {
	return {
		onItemClick: (id, selected) => {
			dispatch(completeIngredientItem(id, selected));
		}
	}
};
/**
 * redux api for connection
 */
const VisibleIngredientList = connect(
	mapStateToProps,
	mapDispatchToProps
)(IngredientsList);

export default VisibleIngredientList