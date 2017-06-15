import React from 'react';
import {bool, node, string, func, object} from 'prop-types';
import {css, withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const constructClassNameString = (reverse, styles) =>
    reverse ? `${css(styles.row)} reverse` : css(styles.row);

export const RowPure = ({reverse, children, styles, className, onClick}) =>
    <div className={`${constructClassNameString(reverse, styles)} ${className || ''}`} onClick={onClick}>
        {children}
    </div>;

RowPure.propTypes = {
    className: string,
    styles: object,
    children: node,
    reverse: bool,
    onClick: func
};

export default withStyles(theme => calculateStyles(theme))(RowPure);