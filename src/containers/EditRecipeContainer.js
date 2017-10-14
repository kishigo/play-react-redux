/**
 * Created by Kelvin Ishigo on 10/14/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import { connect } from 'react-redux'
import EditRecipeForm from '../components/EditRecipeForm'

let EditRecipeContainer = () => {
	console.log('EditRecipeContainer');
	return (
		<div>
			<EditRecipeForm something="foobarbaz"/>
		</div>
	);
};
EditRecipeContainer = connect()(EditRecipeContainer);
export default EditRecipeContainer