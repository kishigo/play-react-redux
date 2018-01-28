/**
 * Created by Kelvin Ishigo on 1/28/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
import React from 'react'
import PropTypes from 'prop-types'
/**
 * @brief Presentational component, row of CellItems
 * @param cellItems - json items in row
 * @param title - optional title of row
 * @param titleColor - optional title color
 * @param visibleItemCount - visible set of items
 * @param w - width of row
 * @param h - height of row
 * @param animateScroll - animate or not
 * @param onItemClickFn - callback when selected, args: cellItem, indexAt
 * @param currentSelectedItemIndex - index of current selected item
 * @constructor
 */
const RowOfCellItems = ({cellItems, title, titleColor, visibleItemCount, w, h, animateScroll, onItemClickFn, currentSelectedItemIndex}) => {
	if (w === undefined) {
		w = "100%"
	}
	if (h === undefined) {
		h = "100%"
	}
	if (title === undefined) {
		title = "";
		titleColor = "clear";
	}
	else {
		if (titleColor === undefined) {
			titleColor = "black";
		}
	}
	let containerStyle = {
		width: w,
		height: h,
		border: "none",
	};
	let titleStyle = {
		color: titleColor,
		width: "100%",
		textAlign: "left"
	};
	return (
		<div>
			<div style={titleStyle}>{title}</div>
			<div style={containerStyle}>
				Hello stupid row of cells
			</div>
		</div>
	)
};

/**
 * @brief PropType checking on the args to this component
 * @type {{cellItems: *, title: shim, titleColor: shim, w: shim, h: shim, visibleItemCount: *, animateScroll: shim, onItemClickFn: shim, currentSelectedItemIndex: shim}}
 */
RowOfCellItems.propTypes = {
	cellItems: PropTypes.array.isRequired,
	title: PropTypes.string,
	titleColor: PropTypes.string,
	w: PropTypes.string,
	h: PropTypes.string,
	visibleItemCount: PropTypes.number.isRequired,
	animateScroll: PropTypes.bool,
	onItemClickFn: PropTypes.func,
	currentSelectedItemIndex: PropTypes.number
};

export default RowOfCellItems