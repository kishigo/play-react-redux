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

let AddIngredientItem = (props) => {
	let ingredient_item_name;
	let ingredient_item_qty;
	let ingredient_type;
	console.log('addIngredient: props.onSubmitIngredient: ' + props.onSubmitIngredient);
	
	return (
		<div>
			<h2>Add Ingredient</h2>
			<form
				onSubmit={e => {
					e.preventDefault();
					if (!ingredient_item_name.value.trim()) {
						return
					}
					props.onSubmitIngredient({name: ingredient_item_name.value,
						qty: ingredient_item_qty.value, type:
						ingredient_type.value});
					ingredient_item_name.value = '';
					ingredient_item_qty.value = '';
					ingredient_type.value = '';
				}}
			>
				<label style={labelStyle}>item:</label><input
				type="text"
				name="item"
				ref={node => {
					ingredient_item_name = node
				}}
			/>
				<br/>
				<label style={labelStyle}>qty: </label><input
				type="text"
				name="item"
				ref={node => {
					ingredient_item_qty = node
				}}
			/>
				<br/>
				<label style={labelStyle}>type:</label> <input
				type="text"
				name="item"
				ref={node => {
					ingredient_type = node
				}}
			/>
				<br/>
				<button type="submit">
					Add Ingredient Item
				</button>
			</form>
		</div>
	)
};

export default AddIngredientItem