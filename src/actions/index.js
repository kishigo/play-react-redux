/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {RecipeTypes} from './ActionTypes';

let nextTodoId = 0;
export const addTodo = text => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	}
};

export const setVisibilityFilter = filter => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
};

export const toggleTodo = id => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
};

export const ingestRecipe = recipe => {
	return {
		type: RecipeTypes.INGEST_RECIPE,
		id: nextTodoId++,
		recipe
	}
};

export  const deleteRecipe = id => {
	return {
		type: RecipeTypes.DELETE_RECIPE,
		id
	}
};

export const filterRecipe = filter => {
	return {
		type: RecipeTypes.FILTER_RECIPE,
		filter
	}
};

export const modifyRecipe = id => {
	return {
		type: RecipeTypes.MODIFY_RECIPE,
		id
	}
};

export const displayRecipe = id => {
	return {
		type: RecipeTypes.DISPLAY_RECIPE,
		id
	}
};