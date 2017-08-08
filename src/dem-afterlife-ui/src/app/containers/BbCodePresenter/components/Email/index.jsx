import React from 'react';
import {string, shape} from 'prop-types';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';

export const EmailPure = ({email, styles}) => (
    <a className={styles.email} href={`mailto:${email}`} rel='nofollow'>
        {email}
    </a>
);

EmailPure.propTypes = {
    styles: shape().isRequired,
    email: string.isRequired
};

export default withStyles(theme => calculateStyles(theme))(EmailPure);
