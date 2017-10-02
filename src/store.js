/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import todoApp from './reducers'
// Add routing support, copy example @ https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f

export const history = createHistory();

const enhancers = [];
const middleware = [
	thunk,
	routerMiddleware(history)
];

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
);

let initialState = {todos:[
	{id: 0, text: 'Use Redux', completed: false},
	{id: 1, text: 'Grok Redux Classes',completed: false}],
	visibilityFilter: "SHOW_ALL"};

export const configureStore = () => {
	let store = createStore(todoApp, initialState,composedEnhancers);
	console.log(store.getState());
	return store;
};

//const store = createStore(todoApp, initialState,composedEnhancers);
export default configureStore;