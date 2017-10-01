/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import { createStore } from 'redux'
import todoApp from './reducers'

let initialState = {todos:[
	{id: 0, text: 'Use Redux', completed: false},
	{id: 1, text: 'Grok Redux Classes',completed: false}],
	visibilityFilter: "SHOW_ALL"};
const configureStore = () => {
	let store = createStore(todoApp, initialState);
	console.log(store.getState());
	return store;
};

export default configureStore;