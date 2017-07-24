import React from 'react';
import {bool, node, string, func, shape} from 'prop-types';
import {css, withStyles} from 'styles';
import {defaults} from 'utils';
import calculateStyles from './calculateStyles';

const constructClassNameString = (reverse, styles) =>
    css([styles.row, reverse ? 'reverse' : defaults.emptyString]);

export const RowPure = ({reverse, children, styles, className, onClick}) => {
    const localClassName = `${constructClassNameString(reverse, styles)} ${className || defaults.emptyString}`;
    return onClick ?
        (
            <div className={localClassName} onClick={onClick} role={'button'} tabIndex={0}>
                {children}
            </div>
        ) : (
            <div className={localClassName}>
                {children}
            </div>
        );
};

RowPure.propTypes = {
    className: string,
    styles: shape().isRequired,
    children: node.isRequired,
    reverse: bool,
    onClick: func // eslint-disable-line react/require-default-props
};

RowPure.defaultProps = {
    className: defaults.emptyString,
    reverse: false
};

export default withStyles(theme => calculateStyles(theme))(RowPure);