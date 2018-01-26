/**
 * Created by Kelvin Ishigo on 1/25/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import { connect } from 'react-redux'
import PillButton from "../components/PillButton"
import PillButtonStack from "./PillButtonStack"

const PillButtonContainer = (props) => {
	let handleClick = (e) => {
		e.preventDefault();
		console.log('WTF');
	};
	return <div>
		<PillButton onClickFn={handleClick} title={"Testing 1,2,3"} titleColor={"red"} width={200} backgroundColor={'blue'} disabled={false}/>
		<PillButtonStack/>
		</div>
};

export default PillButtonContainer;