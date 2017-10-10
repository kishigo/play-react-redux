/**
 * Created by Kelvin Ishigo on 10/3/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import { connect } from 'react-redux'
import { completeIngredientItem } from '../actions'
import GenericList from '../components/GenericList'
import {IngredientTypes} from '../actions/ActionTypes'

const buildTextPart = item => (item.qty + ' - ' + item.name);
const buildItem = item => ({id: item.id, text: buildTextPart(item), selected: item.completed});
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
			return ingredientItems.filter(t => t.completed).map(item => (buildItem(item)));
		case IngredientTypes.SHOW_ACTIVE:
			return ingredientItems.filter(t => !t.completed).map(item => (buildItem(item)));
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
		items: getVisibleIngredientItems(state.ingredients, state.ingredientVisibilityFilter)
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
)(GenericList);

export default VisibleIngredientList