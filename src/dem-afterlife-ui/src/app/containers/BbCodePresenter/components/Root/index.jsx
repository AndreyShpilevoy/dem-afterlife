import React from 'react';
import {node, shape} from 'prop-types';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

export const RootPure = ({children, styles}) => (
    <span
        className={styles.root}>
        {children}
    </span>
);

RootPure.propTypes = {
    styles: shape().isRequired,
    children: node.isRequired
};

export default withStyles(theme => calculateStyles(theme))(RootPure);
