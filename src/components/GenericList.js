/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const GenericList = ({ items, onItemClick }) => (
	<ul>
		{items.map(item => (
			<Item key={item.id} {...item} onClick={() => onItemClick(item.id)} />
		))}
	</ul>
);

GenericList.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			selected: PropTypes.bool.isRequired
		}).isRequired
	).isRequired,
	onItemClick: PropTypes.func.isRequired
};

export default GenericList