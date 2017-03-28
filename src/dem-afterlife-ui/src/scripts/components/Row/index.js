import React, { PropTypes } from 'react';
import { ClassNamesPropType } from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

const constructClassNameString = (reverse, className, classNames) => {
    const result = reverse ? `${classNames.row} reverse` : classNames.row;
    return className ? `${result} ${className}` : result;
};

const Row = ({ reverse, children, className, classNames }) =>
    <div className={constructClassNameString(reverse, className, classNames)}>
        {children}
    </div>;

const {bool, node, string} = PropTypes;
Row.propTypes = {
    className: string,
    classNames: ClassNamesPropType,
    children: node,
    reverse: bool
};

export default styler((theme) => calculateStyles(theme))(Row);