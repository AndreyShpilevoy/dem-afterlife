import React from 'react';
import {node, shape} from 'prop-types';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

export const ThinkPure = ({children, styles}) => (
    <div className={styles.think}>
        <span className={styles.content}>
            {children}
        </span>
        <div className={styles.image} />
    </div>
);

ThinkPure.propTypes = {
    styles: shape().isRequired,
    children: node.isRequired
};

export default withStyles(theme => calculateStyles(theme))(ThinkPure);
