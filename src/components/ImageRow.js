/**
 * Created by Kelvin Ishigo on 10/14/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import { connect } from 'react-redux'
import Gallery from 'react-grid-gallery'
import ImageGallery from 'react-image-gallery'

const ImageRow = (props) => {
    console.log('ImageRow');
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ];
    const clickThumbnail = () => {
        console.log('clickThumbnail');
    };
    return (
        <div>
            <Gallery images={props.generateRowImages()}
                     enableLightbox={false}
                     onClickThumbnail={clickThumbnail}
                     maxRows={1}/>
            <ImageGallery items={images}/>
        </div>
    );
};

export default ImageRow