import React from 'react';
import {node, string, func, object} from 'prop-types';
import {css, withStyles} from 'styles';
import calculateStyles from './calculateStyles';

export const ContainerPure = ({children, styles, className, onClick}) =>
    <div className={`${css(styles.container)} ${className || ''}`} onClick={onClick}>
        {children}
    </div>;

ContainerPure.propTypes = {
    className: string,
    styles: object,
    children: node,
    onClick: func
};

export default withStyles(theme => calculateStyles(theme))(ContainerPure);