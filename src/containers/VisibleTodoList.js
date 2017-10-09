/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import GenericList from '../components/GenericList'

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return todos.map(item => ({id: item.id, text: item.text, selected: item.completed}));
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed).map(item => ({id: item.id, text: item.text, selected: item.completed}));
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed).map(item => ({id: item.id, text: item.text, selected: item.completed}));
		default:
			return todos.map(item => ({id: item.id, text: item.text, selected: item.completed}));
	}
};

const mapStateToProps = state => {
	return {
		items: getVisibleTodos(state.todos, state.visibilityFilter)
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onItemClick: id => {
			dispatch(toggleTodo(id));
		}
	}
};

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(GenericList);

export default VisibleTodoList;
