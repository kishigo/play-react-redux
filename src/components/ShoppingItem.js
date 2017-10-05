/**
 * Created by Kelvin Ishigo on 10/3/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'

const ShoppingItem = ({ onClick, completed, name, qty, market}) => (
	<li onClick={onClick}
	    style={{textDecoration: completed ? 'line-through' : 'none'}}>
		{qty} - {name} @ {market}
	</li>
);

ShoppingItem.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	qty: PropTypes.string.isRequired,
	market: PropTypes.string.isRequired,
};

export default ShoppingItem