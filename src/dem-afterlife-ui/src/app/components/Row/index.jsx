import React from 'react';
import {bool, node, string, func, shape} from 'prop-types';
import {css, withStyles} from 'styles';
import {defaults} from 'utils';
import calculateStyles from './calculateStyles';

const constructClassNameString = (reverse, styles) =>
    css([styles.row, reverse ? 'reverse' : defaults.emptyString]);

export const RowPure = ({reverse, children, styles, className, onClick}) => {
    const localeClassName = `${constructClassNameString(reverse, styles)} ${className || defaults.emptyString}`;
    return (
        <div className={localeClassName} onClick={onClick}>
            {children}
        </div>
    );
};

RowPure.propTypes = {
    className: string,
    styles: shape().isRequired,
    children: node.isRequired,
    reverse: bool,
    onClick: func
};

RowPure.defaultProps = {
    className: defaults.emptyString,
    onClick: defaults.emptyFunction,
    reverse: false
};

export default withStyles(theme => calculateStyles(theme))(RowPure);