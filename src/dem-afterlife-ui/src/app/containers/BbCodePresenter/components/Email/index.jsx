import React from 'react';
import {string, shape} from 'prop-types';
import {injectSheet} from 'styles';
import calculateStyles from './calculateStyles';

export const EmailPure = ({email, classes}) => (
    <a className={classes.email} href={`mailto:${email}`} rel='nofollow'>
        {email}
    </a>
);

EmailPure.propTypes = {
    classes: shape().isRequired,
    email: string.isRequired
};

export default injectSheet(calculateStyles, {componentName: 'Email'})(EmailPure);
