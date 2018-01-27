/**
 * Created by Kelvin Ishigo on 1/24/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import { connect } from 'react-redux'
import Hero from '../components/Hero'
import PillButton from "../components/PillButton";
import Synopsis from "../components/Synopsis";
import ReadOnlyTextBox from "../components/ReadOnlyTextBox";
import "../index.css"
import FormattedText from "../components/FormattedTextItem";

const textBodyText = "aeij sinosiifosfjein o osei\nfosijoim siseofjjfiseifj   fisfijsoef";
const sampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vivamus efficitur, neque a pretium tincidunt, dolor eros gravida magna, vel ultricies dolor dui non nisl. Aliquam id aliquam urna. In facilisis ante ac hendrerit venenatis.


- Sed sed mattis libero: http://example.com/liber\n \
- Fusce vulputate aliquam venenatis: http://example.com/venenatis\n \

Proin ut dapibus libero, eu vestibulum elit.
Sed lorem libero, semper eget risus ac, suscipit dapibus dui.

lorem@example.com
`;
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
	const testOnClick = (e) => {
		e.preventDefault();
		console.log('testOnClick');
		alert('Bite me!')
	};
	var fontStyle = {
		fontSize: "8px"
	};
	return <div>
		<Hero heroImage={'MA_Header_Logo.png'} backgroundColor={'black'}/>
		{/*<div style={ testStyle }>Hello</div>*/}
		<PillButton onClickFn={testOnClick} title={'Testing 1 2 3'} titleColor={'gray'} width={200} backgroundColor={'#ffffff00'} disabled={true}/>
		<button onClick={testOnClick}>test button</button>
		<div className='rowC'>
			<Synopsis title={"Dummy Title"} textBody={textBodyText} textColor={"gray"} backgroundColor={ "black" }/>
			<ReadOnlyTextBox textBody={textBodyText} textColor={"red"} backgroundColor={"green"}/>
			<FormattedText text={sampleText} textColor={"red"} font={"any"} fontSize={16} backgroundColor={"gray"}/>
		</div>
	</div>
};

export default HeroContainer