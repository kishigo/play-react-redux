/**
 * Created by Kelvin Ishigo on 1/25/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react';

export default function SampleDisplay(props) {
    // Supposing your item shape is something like {name: 'foo'}
    const { item, index, itemsLength } = props;
    return <div>Item {index} of {itemsLength}: {item.name}</div>;
}