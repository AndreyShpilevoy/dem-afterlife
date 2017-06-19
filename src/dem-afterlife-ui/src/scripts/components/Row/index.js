import React from 'react';
import {bool, node, string, func, object} from 'prop-types';
import {css, withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const constructClassNameString = (reverse, styles) =>
    css([styles.row, reverse ? 'reverse' : '']);

export const RowPure = ({reverse, children, styles, className, onClick}) => {
    const localeClassName = `${constructClassNameString(reverse, styles)} ${className || ''}`;
    return (
        <div className={localeClassName} onClick={onClick}>
            {children}
        </div>
    );
};

RowPure.propTypes = {
    className: string,
    styles: object,
    children: node,
    reverse: bool,
    onClick: func
};

export default withStyles(theme => calculateStyles(theme))(RowPure);