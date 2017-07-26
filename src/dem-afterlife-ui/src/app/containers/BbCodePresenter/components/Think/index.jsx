import React from 'react';
import {node, shape} from 'prop-types';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

const Think = ({children, styles}) => (
    <div className={styles.think}>
        <span className={styles.thinkContent}>
            {children}
        </span>
        <div className={styles.thinkImage} />
    </div>
);

Think.propTypes = {
    styles: shape().isRequired,
    children: node.isRequired
};

export default withStyles(theme => calculateStyles(theme))(Think);
