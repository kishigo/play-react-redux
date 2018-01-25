/**
 * Created by Kelvin Ishigo on 1/24/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import { connect } from 'react-redux'
import Hero from '../components/Hero'

const HeroContainer = (props) => {
	// Just goofing around with overlaying div on top
	var testStyle = {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: "350px",
		color: "red",
		margin: "auto",
		border: "3px solid green",
		textAlign: "center"
	};
	return <div>
		<Hero heroImage={'favicon.ico'}/>
		<div style={ testStyle }>Hello</div>
	</div>
};

export default HeroContainer