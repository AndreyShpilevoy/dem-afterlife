import React from 'react';
import PropTypes from 'prop-types';
import {ClassNamesPropType} from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

const constructClassNameString = (reverse, classNames) =>
    reverse ? `${classNames.row} reverse` : classNames.row;

export const RowPure = ({reverse, children, classNames}) =>
    <div className={constructClassNameString(reverse, classNames)}>
        {children}
    </div>;

const {bool, node} = PropTypes;
RowPure.propTypes = {
    classNames: ClassNamesPropType,
    children: node,
    reverse: bool
};

export default styler(theme => calculateStyles(theme))(RowPure);