/**
 * Created by Kelvin Ishigo on 10/11/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'

let labelStyle = {
	display: "inline-block",
	float: "left",
	clear: "left",
	width: "5em"
};

let AddKeywordItem = (props) => {
	let keyword_item_name;
	console.log('AddKeywordItem: props.onSubmitKeyword: ' + props.onSubmitKeyword);
	
	return (
		<div>
			<h2>Add Keyword</h2>
			<form
				onSubmit={e => {
					e.preventDefault();
					if (!keyword_item_name.value.trim()) {
						return
					}
					props.onSubmitKeyword({text: keyword_item_name.value});
					keyword_item_name.value = '';
				}}
			>
				<label style={labelStyle}>item:</label><input
				type="text"
				name="item"
				ref={node => {
					keyword_item_name = node
				}}
			/>
				<button type="submit">
					Add Keyword Item
				</button>
			</form>
		</div>
	)
};

export default AddKeywordItem