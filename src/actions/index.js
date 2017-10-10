/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {RecipeTypes, ShoppingTypes, IngredientTypes} from './ActionTypes';

let todoId = 0;
let recipeId = 0;
let shoppingItemId = 0;
let ingredientItemId = 0;

// export external generators of unique id in case initial state is required
// This guarantees consistency in id values between initial and normallly added items
/**
 * Allow access to the private todoId by initial state
 * @returns {number}
 */
export const getNextTodoId = () => {
	return todoId++;
};
/**
 * Allow access to the private recipeId by initial state
 * @returns {number}
 */
export const getNextRecipeId = () => {
	return recipeId++;
};
/**
 * Allow access to the private shoppingItemId by initial state
 * @returns {number}
 */
export const getNextShoppingItemId = () => {
	return shoppingItemId++;
};

export const getNextIngredientItemId = () => (ingredientItemId++);

export const addTodo = text => {
	return {
		type: 'ADD_TODO',
		id: getNextTodoId(),
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
		id: getNextRecipeId(),
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
		id: getNextShoppingItemId(),
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

export const clearCompletedShoppingItems = () => {
	return {
		type: ShoppingTypes.DELETE_COMPLETED_ITEMS
	}
};

export const clearShoppingList = () => {
	return {
		type: ShoppingTypes.CLEAR_LIST
	}
};

export const completeShoppingItem = id => {
	return {
		type: ShoppingTypes.COMPLETE_ITEM,
		id
	}
};

export const setShoppingListVisibilityFilter = filter => {
	return {
		type: ShoppingTypes.SET_VISIBILITY_FILTER,
		filter
	}
};

export const addIngredientItem = (name, qty) => {
	return {
		type: IngredientTypes.ADD_ITEM,
		id: getNextIngredientItemId(),
		item: {
			name: name,
			qty: qty,
		}
	}
};

export const completeIngredientItem = id => {
	return {
		type: IngredientTypes.COMPLETE_ITEM,
		id
	}
};
