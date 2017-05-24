import React from 'react';
import {bool, node, string, func} from 'prop-types';
import {ClassNamesPropType} from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

const constructClassNameString = (reverse, classNames) =>
    reverse ? `${classNames.row} reverse` : classNames.row;

export const RowPure = ({reverse, children, classNames, className, onClick}) =>
    <div className={`${constructClassNameString(reverse, classNames)} ${className || ''}`} onClick={onClick}>
        {children}
    </div>;

RowPure.propTypes = {
    className: string,
    classNames: ClassNamesPropType,
    children: node,
    reverse: bool,
    onClick: func
};

export default styler(theme => calculateStyles(theme))(RowPure);