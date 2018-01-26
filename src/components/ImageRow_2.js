/**
 * Created by Kelvin Ishigo on 1/26/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import {connect} from 'react-redux'
import ImageGallery from 'react-image-gallery'

class MyComponent extends React.Component {

  render() {

    const images = [{
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

    return (
      <ImageGallery items={images} />
    );
  }

}

export default MyComponent
// const ImageRow = (props) => {
// 	console.log('ImageRow');
// 	const images = [
// 		{
// 			original: 'http://lorempixel.com/1000/600/nature/1/',
// 			thumbnail: 'http://lorempixel.com/250/150/nature/1/',
// 		},
// 		{
// 			original: 'http://lorempixel.com/1000/600/nature/2/',
// 			thumbnail: 'http://lorempixel.com/250/150/nature/2/'
// 		},
// 		{
// 			original: 'http://lorempixel.com/1000/600/nature/3/',
// 			thumbnail: 'http://lorempixel.com/250/150/nature/3/'
// 		}
// 	];
// 	return (
// 			<ImageGallery items={props.generateRowImages()}/>
// 	);
// };
//
// export default ImageRow