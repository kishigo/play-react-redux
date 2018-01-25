/**
 * Created by Kelvin Ishigo on 1/25/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'

/**
 * Presentational component to represent a formatted buttno
 * @param heroImage - url of the heroImage
 * @constructor
 */

const localOnClickFn = (e) => {
	e.preventDefault();
	console.log('localOnClickFn');
};
const PillButton = ({ onClickFn, title, width, backgroundColor}) => {
	// CSS Styling.  There is some cruft in the style to help align
	let widthString = width + "px";
	var buttonStyle = {
		border: "2px solid blue",
		padding: "20px",
		textAlign: "center",
		color: "white",
		display: "inline-block",
		fontSize: "16px",
		margin: "4px 2px",
		borderRadius: "30px",
		width: widthString,
		backgroundColor: backgroundColor,
		zIndex: "1"
	};
	return (
		<button onClick={(e) => onClickFn(e)} style={ buttonStyle }>{ title }</button>
	)
};
/**
 * Defines the required props shape
 * @type {{heroImage: *}}
 */
PillButton.propTypes = {
	onClickFn: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	backgroundColor: PropTypes.string.isRequired
};
export default PillButton