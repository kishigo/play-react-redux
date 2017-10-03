/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import { connect } from 'react-redux'
import { ingestRecipe } from '../actions'

let AddRecipe = ({ dispatch }) => {
	let input;
	
	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault();
					if (!input.value.trim()) {
						return
					}
					dispatch(ingestRecipe(input.value));
					input.value = ''
				}}
			>
				<input
					ref={node => {
						input = node
					}}
				/>
				<button type="submit">
					Add Recipe
				</button>
			</form>
		</div>
	)
};
AddRecipe = connect()(AddRecipe);

export default AddRecipe