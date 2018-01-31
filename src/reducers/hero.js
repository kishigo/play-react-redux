/**
 * Created by Kelvin Ishigo on 1/29/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {TestNewTypes} from "../actions/ActionTypes";
import {HeroTestData} from "../tests/TestNewTypesTestData";

const hero = (state = {}, action) => {
	switch (action.type) {
		case TestNewTypes.OPEN_HERO_CONTAINER:
			// let newState = {...state, hero: HeroTestData};
			// let newState = {...HeroTestData.testRowOfCells, title: action.heroName};
			let newState = {...HeroTestData,
				testRowOfCells: {...HeroTestData.testRowOfCells, title: action.heroName}};
			return newState;
		case TestNewTypes.CLOSE_HERO_CONTAINER:
			return {...state};
		case TestNewTypes.UPDATE_HERO_CONTAINER:
			return {...state};
		default:
			return {...state};
	}
};

export default hero;