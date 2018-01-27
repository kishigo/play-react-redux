/**
 * Created by Kelvin Ishigo on 1/24/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

import React from 'react'
import PropTypes from 'prop-types'

/**
 * Presentational component to represent a basic list of items, scales with container
 * @param heroImage - url of the heroImage
 * @constructor
 */

const Hero = ({ heroImage, backgroundColor, title}) => {
	// CSS Styling.  There is some cruft in the style to help align
	var backgroundStyle = {
		width: "100%",
		height: "400px",
		backgroundImage: "url(" + heroImage + ")",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "contain",
		border: "2px solid blue",
		backgroundColor: backgroundColor
	};
	return (
		<div style={ backgroundStyle }></div>
	)
};
/**
 * Defines the required props shape
 * @type {{heroImage: PropTypes.string.isRequired}}
 * @type {{backgroundColor: PropTypes.string.isRequired}}
 */
Hero.propTypes = {
	heroImage: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string.isRequired,
	title: PropTypes.string
};
export default Hero