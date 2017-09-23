import React from 'react';
import {shape, string} from 'prop-types';
import SvgIconsMapper from 'containers/SvgIconsMapper';
import {injectSheet} from 'styles';
import calculateStyles from './calculateStyles';

export const ErrorPure = ({classes, message}) => (
    <div className={classes.container}>
        <SvgIconsMapper className={classes.image} iconName={'Error'} />
        <div>
            {message}
        </div>
    </div>
);

ErrorPure.propTypes = {
    classes: shape().isRequired,
    message: string
};

ErrorPure.defaultProps = {
    message: 'Error'
};


export default injectSheet(calculateStyles, {componentName: 'Error'})(ErrorPure);
