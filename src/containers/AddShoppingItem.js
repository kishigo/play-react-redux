/**
 * Created by Kelvin Ishigo on 10/3/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import { connect } from 'react-redux'
import { addShoppingItem } from '../actions'

let AddShoppingItem = ({ dispatch }) => {
	let input;
	
	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault();
					if (!input.value.trim()) {
						return
					}
					dispatch(addShoppingItem(input.value, 0, 'Jons'));
					input.value = ''
				}}
			>
				<input
					ref={node => {
						input = node
					}}
				/>
				<button type="submit">
					Add Shopping Item
				</button>
			</form>
		</div>
	)
};
AddShoppingItem = connect()(AddShoppingItem);

export default AddShoppingItem