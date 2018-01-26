/**
 * Created by Kelvin Ishigo on 1/25/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import { connect } from 'react-redux'
import PillButton from "../components/PillButton";

let PillButtonStack = (props) => {
	let handleClick = (e) => {
		e.preventDefault();
		console.log('WTF');
	};
	let buttons = props.buttons.map((button, i) => {
		return (
			<PillButton key={i} onClickFn={handleClick} title={"TestButton-"+i } titleColor={"white"} width={200} backgroundColor={"blue"}/>
		)
	});
	return <div>
		{ buttons }
		</div>
};

const mapStateToProps = (state) => {
	return {
		buttons: [{title: "button-0"}, {title: "button-1"}]
	}
};

PillButtonStack = connect(
	mapStateToProps,
)(PillButtonStack);

export default PillButtonStack;