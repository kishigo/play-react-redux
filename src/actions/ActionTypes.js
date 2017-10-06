/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
// Types specific to recipe SPA...Convention is to work verb + object
export const RecipeTypes = {
	INGEST_RECIPE: 'INGEST_RECIPE',
	DELETE_RECIPE: 'DELETE_RECIPE',
	FILTER_RECIPE: 'FILTER_RECIPE',
	MODIFY_RECIPE: 'MODIFY_RECIPE',
	DISPLAY_RECIPE: 'DISPLAY_RECIPE',
	HIGHLIGHT_RECIPE: 'HIGHLIGHT_RECIPE'
};
/**
 * Important that strings must be unique across all <action>Types
 * @type {{ADD_ITEM: string, DELETE_ITEM: string, DELETE_COMPLETED_ITEMS: string, COMPLETE_ITEM: string}}
 */
export const ShoppingTypes = {
	ADD_ITEM: 'ADD_SHOPPING_ITEM',
	DELETE_ITEM: 'DELETE_SHOPPING_ITEM',
	CLEAR_LIST: 'CLEAR_SHOPPING_LIST',
	DELETE_COMPLETED_ITEMS: 'DELETE_COMPLETED_SHOPPING_ITEMS',
	COMPLETE_ITEM: 'COMPLETE_SHOPPING_ITEM'
};