/**
 * Created by Kelvin Ishigo on 10/14/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import { connect } from 'react-redux'
import Gallery from 'react-grid-gallery'

const ImageRow = (props) => {
    console.log('ImageRow');
    const clickThumbnail = () => {
        console.log('clickThumbnail');
    };
    return (
        <div>
            <Gallery images={props.generateRowImages()}
                     enableLightbox={false}
                     onClickThumbnail={clickThumbnail}
                     maxRows={1}/>
        </div>
    );
};

export default ImageRow