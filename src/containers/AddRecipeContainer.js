/**
 * Created by Kelvin Ishigo on 10/14/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import { connect } from 'react-redux'
import AddRecipeForm from '../components/AddRecipeForm'

let AddRecipeContainer = () => {
	console.log('AddRecipeContainer');
	return (
		<div>
			<AddRecipeForm something="foobarbaz"/>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		onItemClick: (recipe) => {
			console.log('AddRecipeContainer.onItemClick: ' + recipe);
		}
	}
};
AddRecipeContainer = connect(
	mapDispatchToProps
)(AddRecipeForm);
export default AddRecipeContainer