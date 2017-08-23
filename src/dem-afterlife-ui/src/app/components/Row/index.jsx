import React from 'react';
import {bool, node, string, func, shape} from 'prop-types';
import {concatStyleNames, injectSheet} from 'styles';
import calculateStyles from './calculateStyles';

const constructClassNameString = (reverse, classes) =>
    concatStyleNames([classes.row, reverse ? 'reverse' : '']);

export const RowPure = ({reverse, children, classes, className, onClick}) => {
    const localClassName = `${constructClassNameString(reverse, classes)} ${className}`;
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
    classes: shape().isRequired,
    children: node.isRequired,
    reverse: bool,
    onClick: func // eslint-disable-line react/require-default-props
};

RowPure.defaultProps = {
    className: '',
    reverse: false
};

export default injectSheet(calculateStyles, {componentName: 'Row'})(RowPure);