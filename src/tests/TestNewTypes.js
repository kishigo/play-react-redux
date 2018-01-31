/**
 * Created by Kelvin Ishigo on 1/29/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import {HeroTestData} from "./TestNewTypesTestData";

export var TestNewTypesMock = (function () {
	// mock controls
	let mockSuccess = true;

	let getHeroJsonPromise = () => {
		return new Promise((resolve, reject) => {
			let updatedTestData = {...HeroTestData};
			mockSuccess ? resolve(updatedTestData) : reject('Error');
		})
	};
	console.log(getHeroJsonPromise);
	let testPromise = getHeroJsonPromise();
	console.log(testPromise);
	// let testPromise = new Promise((resolve, reject) => {
	// 		let updatedTestData = {...HeroTestData, title: heroName};
	// 		mockSuccess ? resolve(updatedTestData) : reject('Error');
	// });
	return {
		getHeroJsonPromise: testPromise
	}
})();

