/**
 * Created by Kelvin Ishigo on 10/3/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import {connect} from 'react-redux'
import {addShoppingItem} from '../actions'

let labelStyle = {
	display: "inline-block",
	float: "left",
	clear: "left",
	width: "5em"
};

let AddShoppingItem = ({dispatch}) => {
	let shopping_item_name;
	let shopping_item_qty;
	let market_name;
	
	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault();
					if (!shopping_item_name.value.trim()) {
						return
					}
					dispatch(addShoppingItem(shopping_item_name.value, shopping_item_qty.value, market_name.value));
					shopping_item_name.value = '';
					shopping_item_qty.value = '';
					market_name.value = '';
				}}
			>
				<label style={labelStyle}>item:</label><input
				type="text"
				name="item"
				ref={node => {
					shopping_item_name = node
				}}
			/>
				<br/>
					<label style={labelStyle}>qty: </label><input
					type="text"
					name="item"
					ref={node => {
						shopping_item_qty = node
					}}
				/>
					<br/>
				<label style={labelStyle}>market:</label> <input
						type="text"
						name="item"
						ref={node => {
							market_name = node
						}}
					/>
						<br/>
							<button type="submit">
								Add Shopping Item
							</button>
			</form>
		</div>
	)
	};
	AddShoppingItem = connect()(AddShoppingItem);
	
	export default AddShoppingItem