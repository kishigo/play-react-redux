/**
 * Created by Kelvin Ishigo on 10/13/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Textarea from 'react-textarea-autosize'

const Instructions = ({textContent, onChange}) => (
	<form>
		<h2>Instructions</h2>
		<Textarea cols="50" value={textContent} onChange={onChange}></Textarea>
	</form>
);

Instructions.propTypes = {
	textContent: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export default Instructions