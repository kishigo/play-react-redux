/**
 * Created by Kelvin Ishigo on 10/14/17.
 *
 * Copyright (c) 2017 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import { connect } from 'react-redux'
import Gallery from 'react-grid-gallery'

const ImageGrid = (props) => {
    console.log('ImageGrid');
    const clickThumbnail = () => {
        console.log('clickThumbnail');
    };
    return (
        <div>
            <Gallery images={props.generateImages()}
                     enableLightbox={false}
                     onClickThumbnail={clickThumbnail}
                     maxRows={2}/>
        </div>
    );
};

export default ImageGrid