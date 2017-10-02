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
import { routerReducer } from 'react-router-redux'

const todoApp = combineReducers({
	todos,
	recipes,
	visibilityFilter,
	routing: routerReducer
});

export default todoApp;