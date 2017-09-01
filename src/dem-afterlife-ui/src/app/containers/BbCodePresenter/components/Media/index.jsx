import React from 'react';
import {node, shape} from 'prop-types';
import {injectSheet} from 'styles';
import calculateStyles from './calculateStyles';

export const MediaPure = ({children, classes}) => (
    <span
        className={classes.media}>
        {children}
    </span>
);

MediaPure.propTypes = {
    classes: shape().isRequired,
    children: node.isRequired
};

export default injectSheet(calculateStyles, {componentName: 'Media'})(MediaPure);
