import React from 'react';
import {bool, node, string} from 'prop-types';
import {ClassNamesPropType} from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

const constructClassNameString = (reverse, classNames) =>
    reverse ? `${classNames.row} reverse` : classNames.row;

export const RowPure = ({reverse, children, classNames, className}) =>
    <div className={`${constructClassNameString(reverse, classNames)} ${className || ''}`}>
        {children}
    </div>;

RowPure.propTypes = {
    className: string,
    classNames: ClassNamesPropType,
    children: node,
    reverse: bool
};

export default styler(theme => calculateStyles(theme))(RowPure);