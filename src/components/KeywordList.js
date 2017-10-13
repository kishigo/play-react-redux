/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'
import GenericList from './GenericList'
/**
 * Presentational component to represent a basic list of items
 * @param items - list of items, must have {id, text, selected} attributes
 * @param onItemClick - action on item when clicked
 * @constructor
 */
const KeywordList = ({ items, onItemClick}) => (
	<ul>
		<h3>Keywords</h3>
		<GenericList items={items} onItemClick={onItemClick} horizontal={true}/>
	</ul>
);
/**
 * defines the required shape
 * @type {{items: *, onItemClick: *}}
 */
KeywordList.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			selected: PropTypes.bool.isRequired
		}).isRequired
	).isRequired,
	onItemClick: PropTypes.func.isRequired,
	horizontal: PropTypes.bool
};

export default KeywordList