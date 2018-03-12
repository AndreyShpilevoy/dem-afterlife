import React from 'react';
import {string, shape} from 'prop-types';
import {injectSheet} from 'styles';
import calculateStyles from './calculateStyles';

const getEmail = email => `mailto:${email}`;
export const EmailPure = ({email, classes}) => (
    <a className={classes.email} href={getEmail(email)} rel='nofollow'>
        {email}
    </a>
);

EmailPure.propTypes = {
    classes: shape().isRequired,
    email: string.isRequired
};

export default injectSheet(calculateStyles, {componentName: 'Email'})(EmailPure);
