/**
 * Created by Kelvin Ishigo on 10/1/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
	<p>
		Show:
		{' '}
		<FilterLink filter="SHOW_ALL">
			All
		</FilterLink>
		{', '}
		<FilterLink filter="SHOW_ACTIVE">
			Active
		</FilterLink>
		{', '}
		<FilterLink filter="SHOW_COMPLETED">
			Completed
		</FilterLink>
	</p>
)

export default Footer