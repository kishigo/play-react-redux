/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'

const Recipe = ({ onClick, selected, title}) => (
	<li onClick={onClick}
	    style={{textDecoration: selected ? 'line-through' : 'none'}}>
		{title}
	</li>
);

Recipe.propTypes = {
	onClick: PropTypes.func.isRequired,
	selected: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired
	
};
export default Recipe