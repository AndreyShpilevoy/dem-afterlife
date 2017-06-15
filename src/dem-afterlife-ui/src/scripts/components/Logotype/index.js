import React from 'react';
import {string, object} from 'prop-types';
import Link from 'components/Link';
import {css, withStyles} from 'styles';
import calculateStyles from './calculateStyles';


export const LogotypePure = ({styles, className}) =>
    <Link className={`${css(styles.logotypeContainer)} ${className || ''}`} to='/'>
        <div className={css(styles.logotype)} />
    </Link>;

LogotypePure.propTypes = {
    styles: object,
    className: string
};

export default withStyles(theme => calculateStyles(theme))(LogotypePure);