/**
 * Created by Kelvin Ishigo on 1/27/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'
import Text from 'react-format-text'

/**
 * Presentational component to generate formatted text
 * Currently based on react-format-text, plan to extend for bold/color, etc
 * @param text - string
 * @param textColor - default foreground color of text
 * @param fontFace - desired font, there is a default
 * @param fontSize - number  in points, not pixels
 * @param backgroundColor - button background, color or RGBA, e.g., #ffffff00 => clear
 * @constructor
 */
const FormattedText = ({text, textColor, fontFace, fontSize, backgroundColor}) => {
	let fontSizeString = fontSize + 'pt';
	if (fontFace === 'any' || fontFace === 'none') {
		fontFace = 'verdana'
	}
	var fontStyle = {
		fontSize: fontSizeString,
		face: fontFace,
		color: textColor
	};
	var textStyle = {
		border: "none",
		textAlign: "left",
		display: "inline-block",
		backgroundColor: backgroundColor,
	};
	// wrap in div so we can assert fontStyle onto the formatted text w/o having to go into the underlying component
	return (
		<div style={fontStyle}>
			<Text style={textStyle}>{text}</Text>
		</div>
	)
};

/**
 * @type {{text: string, textColor: string, font: string, fontSize: number, backgroundColor: string}}
 */
FormattedText.propTypes = {
	text: PropTypes.string.isRequired,
	textColor: PropTypes.string.isRequired,
	fontFace: PropTypes.string.isRequired,
	fontSize: PropTypes.number.isRequired,
	backgroundColor: PropTypes.string.isRequired
};
export default FormattedText