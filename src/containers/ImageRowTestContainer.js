/**
 * Created by Kelvin Ishigo on 1/26/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import {connect} from 'react-redux'
import ImageRow from "../components/ImageRow_2";
import ImageGallery from 'react-image-gallery'
import MyComponent from '../components/ImageRow_2'

const testImages =
	[{
		original: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
		thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
	},
		{
			original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
			thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
		},

		{
			original: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
			thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
		},
		{
			original: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
			thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
		}];

const IMAGES =
	[{
		original: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
		thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
		thumbnailWidth: 320,
		thumbnailHeight: 174,
		isSelected: true,
		caption: "After Rain (Jeshu John - designerspics.com)"
	},
		{
			original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
			thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212,
			tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
			caption: "Boats (Jeshu John - designerspics.com)"
		},

		{
			original: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
			thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212
		},
		{
			original: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
			thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 174,
			isSelected: true,
			caption: "After Rain (Jeshu John - designerspics.com)"
		},
		{
			original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
			thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212,
			tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
			caption: "Boats (Jeshu John - designerspics.com)"
		},

		{
			original: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
			thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212
		},
		{
			original: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
			thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 174,
			isSelected: true,
			caption: "After Rain (Jeshu John - designerspics.com)"
		},
		{
			original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
			thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212,
			tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
			caption: "Boats (Jeshu John - designerspics.com)"
		},

		{
			original: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
			thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212
		},
		{
			original: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
			thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 174,
			isSelected: true,
			caption: "After Rain (Jeshu John - designerspics.com)"
		},
		{
			original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
			thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212,
			tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
			caption: "Boats (Jeshu John - designerspics.com)"
		},

		{
			original: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
			thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212
		},
		{
			original: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
			thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 174,
			isSelected: true,
			caption: "After Rain (Jeshu John - designerspics.com)"
		},
		{
			original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
			thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212,
			tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
			caption: "Boats (Jeshu John - designerspics.com)"
		},

		{
			original: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
			thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212
		},
		{
			original: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
			thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 174,
			isSelected: true,
			caption: "After Rain (Jeshu John - designerspics.com)"
		},
		{
			original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
			thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212,
			tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
			caption: "Boats (Jeshu John - designerspics.com)"
		},

		{
			original: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
			thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212
		},
		{
			original: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
			thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 174,
			isSelected: true,
			caption: "After Rain (Jeshu John - designerspics.com)"
		},
		{
			original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
			thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212,
			tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
			caption: "Boats (Jeshu John - designerspics.com)"
		},

		{
			original: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
			thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212
		},
		{
			original: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
			thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 174,
			isSelected: true,
			caption: "After Rain (Jeshu John - designerspics.com)"
		},
		{
			original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
			thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212,
			tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
			caption: "Boats (Jeshu John - designerspics.com)"
		},

		{
			original: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
			thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
			thumbnailWidth: 320,
			thumbnailHeight: 212
		}];

let currentOffset = 0;
let gridTotalImagesPerRow = 6;
let gridTotalRows = 2;
let gridTotalItems = gridTotalImagesPerRow * gridTotalRows;

const generateImages = () => {
	// Get current dimensions
	let w = window,
		d = document,
		e = d.documentElement,
		g = d.getElementsByTagName('body')[0],
		width = w.innerWidth || e.clientWidth || g.clientWidth,
		height = w.innerHeight || e.clientHeight || g.clientHeight;
	let thumbnailWidth = Math.floor(width / 6);
	let dataSlice = IMAGES.slice(currentOffset, currentOffset + gridTotalItems);
	let uniformThumbnails = dataSlice.map(x => {
		x.thumbnailWidth = thumbnailWidth;
		x.thumbnailHeight = 160;
		return x;
	});
	return uniformThumbnails;
};


// var sampleItems = [
// 	  {key: 1, name: 'Test', sort: 0, filtered: 0},
//   {key: 2, name: 'Test 1', sort: 1, filtered: 0},
// ];

// const AbsoluteGrid = createAbsoluteGrid(SampleDisplay);

let ImageRowTestContainer = () => {
	console.log('ImageRowTestContainer');
	const clickThumbnail = () => {
		console.log('clickThumbnail');
	};
	return (
		<MyComponent/>
	);
};

ImageRowTestContainer = connect()(ImageRowTestContainer);
export default ImageRowTestContainer