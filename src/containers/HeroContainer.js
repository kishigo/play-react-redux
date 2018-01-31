/**
 * Created by Kelvin Ishigo on 1/24/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import Hero from '../components/Hero'
import PillButton from "../components/PillButton";
import Synopsis from "../components/Synopsis";
import ReadOnlyTextBox from "../components/ReadOnlyTextBox";
import "../index.css"
import FormattedText from "../components/FormattedTextItem";
import CellItem from "../components/CellItem";
import ImageItem from "../components/ImageItem";
import RowOfCellItems from "../components/RowOfCellItems";
import MDPTest from "../components/MDPTest";
import MDPTestContainer from "./MDPTestContainer";
import {openHeroContainer} from "../actions";

const textBodyText = "aeij sinosiifosfjein o osei\nfosijoim siseofjjfiseifj   fisfijsoef";
const sampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vivamus efficitur, neque a pretium tincidunt, dolor eros gravida magna, vel ultricies dolor dui non nisl. Aliquam id aliquam urna. In facilisis ante ac hendrerit venenatis.


- Sed sed mattis libero: http://example.com/liber\n \
- Fusce vulputate aliquam venenatis: http://example.com/venenatis\n \

Proin ut dapibus libero, eu vestibulum elit.
Sed lorem libero, semper eget risus ac, suscipit dapibus dui.

lorem@example.com
`;

let myDispatch;

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
	// let testComponent = {};
	let testComponent = FormattedText({
		text: sampleText,
		textColor: "red",
		fontSize: 8,
		fontFace: 'any',
		backgroundColor: "yellow"
	});
	let imageComponent = ImageItem({imageUrl: 'MA_Header_Logo.png'});
	let testFormattedTextItem = {
		type: "FormattedTextItem",
		text: sampleText,
		textColor: "red",
		fontSize: 8
	};
	let testImageItem = {
		type: "ImageItem",
		imageUrl: "MA_Header_Logo.png"
	};
	let testRowOfCellItems = [
		{
			type: "FormattedTextItem",
			text: sampleText,
			textColor: "red",
			fontSize: 8
		},
		{
			type: "ImageItem",
			imageUrl: "MA_Header_Logo.png"
		}
	];

	// There is some implicit structure but most of the page is data driven
	// Required: hero image, button stack
	// Optional: one or more rows
	// Since we do not exactly know the inbound data format, we will have a mapping function to create a palatable array

	let cleanState = () => {
		return props.hero;
	};

	let cleanedState = cleanState();

	// assert that we have some state


	return <div>
		<MDPTestContainer/>
		<Hero heroImage={'MA_Header_Logo.png'} backgroundColor={'black'}/>
		{/*<div style={ testStyle }>Hello</div>*/}
		<PillButton onClickFn={testOnClick} title={'Testing 1 2 3'} titleColor={'gray'} width={200}
		            backgroundColor={'#ffffff00'} disabled={true}/>
		<button onClick={testOnClick}>test button</button>
		<ImageItem title={"Hello ImageItem"} imageUrl={'MA_Header_Logo.png'} titleColor={"purple"} w={'200px'}
		           h={'200px'} backgroundColor={"gray"}/>
		<ImageItem title={"Hello ImageItem"} imageUrl={'MA_Header_Logo.png'} titleColor={"purple"} w={'200px'}
		           h={'200px'} backgroundColor={"gray"} selected={true}/>
		<div className='rowC'>
			<Synopsis title={"Dummy Title"} textBody={textBodyText} textColor={"gray"} backgroundColor={"black"}/>
			<FormattedText text={sampleText} textColor={"white"} font={"any"} backgroundColor={"gray"}/>
		</div>
		<RowOfCellItems id={'TestRow1'} cellItems={testRowOfCellItems} h={"300px"} title={"ROW TITLE"} titleColor={"pink"} offset={0} gap={10} visibleItemCount={5} currentSelectedItemIndex={1}/>
	</div>
};

const mapStateToProps = state => {
	return {
		hero: {...state.hero}
	}
};

const mapDispatchToProps = dispatch => {
	myDispatch = dispatch;
	return bindActionCreators({}, dispatch);
};

// export const mySpecialContainerCreator = connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// );

// mySpecialContainerCreator(MDPTest);
// mySpecialContainerCreator(MDPTestContainer);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeroContainer)

// export default mySpecialContainerCreator(HeroContainer)