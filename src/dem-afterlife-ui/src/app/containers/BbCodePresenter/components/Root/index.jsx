import React from 'react';
import {node, shape} from 'prop-types';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const Root = ({children, styles}) => (
    <span
        className={styles.root}>
        {children}
    </span>
);

Root.propTypes = {
    styles: shape().isRequired,
    children: node.isRequired
};

export default withStyles(theme => calculateStyles(theme))(Root);
