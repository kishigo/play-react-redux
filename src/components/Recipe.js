/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'

const Recipe = ({ onClick, title}) => (
	<li onClick={onClick} style={{textDecoration: 'none'}}>
		{title}
	</li>
);

export default Recipe