/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'
/**
 * Presentational component for an item in the GenericList
 * @param onClick
 * @param selected
 * @param text
 * @constructor
 */
const Item = ({ onClick, selected, text}) => (
	<li onClick={onClick}
	    style={{textDecoration: selected ? 'line-through' : 'none'}}>
		{text}
	</li>
);
/**
 * defines the required shape of the item
 * @type {{onClick: *, selected: *, text: *}}
 */
Item.propTypes = {
	onClick: PropTypes.func.isRequired,
	selected: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
	
};

export default Item