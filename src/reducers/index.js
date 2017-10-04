/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import recipes from './recipes'
import shoppingItems from './shopping'
import { routerReducer } from 'react-router-redux'
/**
 * As I barely grok this, each partial reducer specifies a part of the total state shape
 * because it must furnish a default shape value
 * Or one can use createReducer where you have to pass an initial state (shape)
 * Also, reducers are where I would expect DB activity with server to happen
 * @type {Reducer<S>}
 */
const recipeApp = combineReducers({
	recipes,
	shoppingItems,
	todos,
	visibilityFilter,
	routing: routerReducer
});

export default recipeApp;