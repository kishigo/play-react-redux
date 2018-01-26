/**
 * Created by Kelvin Ishigo on 1/25/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'

/**
 * Presentational component to represent a basic list of items, scales with container
 * @param textBody - string title for body of text in the box
 * @param textColor - string color of text
 * @param backgroundColor - string color of box background
 * @constructor
 */
const ReadOnlyTextBox = ({ textBody, textColor, backgroundColor}) => {
	// CSS Styling.  There is some cruft in the style to help align
	var textBodyStyle = {
		color: textColor,
		width: "300px",
		height: "400px",
		border: "2px solid blue",
		backgroundColor: backgroundColor
	};
	return (
		<div>
			<div style={ textBodyStyle }>{ textBody }</div>
		</div>
	)
};
/**
 * Defines the required props shape
 * @type {{textBody: PropTypes.string.isRequired}}
 * @type {{textColor: PropTypes.string.isRequired}}
 * @type {{backgroundColor: PropTypes.string.isRequired}}
 */
ReadOnlyTextBox.propTypes = {
	textBody: PropTypes.string.isRequired,
	textColor: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string.isRequired
};
export default ReadOnlyTextBox