/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {RecipeTypes, ShoppingTypes} from './ActionTypes';

let todoId = 0;
let recipeId = 0;
let shoppingItemId = 0;

export const addTodo = text => {
	return {
		type: 'ADD_TODO',
		id: todoId++,
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
		id: recipeId++,
		recipe: {
			title: recipe
		}
	}
};

export const highlightRecipe = (id, selected) => {
	return {
		type: RecipeTypes.HIGHLIGHT_RECIPE,
		id: id,
		selected: selected
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

export const addShoppingItem = (name, qty, market) => {
	return {
		type: ShoppingTypes.ADD_ITEM,
		id: shoppingItemId,
		item: {
			name: name,
			qty: qty,
			market: market
		}
	}
};

export const deleteShoppingItem = id => {
	return {
		type: ShoppingTypes.DELETE_ITEM,
		id
	}
};

export const completeShoppingItem = id => {
	return {
		type: ShoppingTypes.COMPLETE_ITEM,
		id
	}
};