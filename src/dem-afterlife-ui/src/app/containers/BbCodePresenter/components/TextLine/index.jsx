import React from 'react';
import {node, shape} from 'prop-types';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

export const TextLinePure = ({children, styles}) => (
    <span
        className={styles.text}>
        {children}
    </span>
);

TextLinePure.propTypes = {
    styles: shape().isRequired,
    children: node.isRequired
};

export default withStyles(theme => calculateStyles(theme))(TextLinePure);
