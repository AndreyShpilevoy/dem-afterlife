import React from 'react';
import {node, shape} from 'prop-types';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const TextLine = ({children, styles}) => (
    <span
        className={styles.text}>
        {children}
    </span>
);

TextLine.propTypes = {
    styles: shape().isRequired,
    children: node.isRequired
};

export default withStyles(theme => calculateStyles(theme))(TextLine);
