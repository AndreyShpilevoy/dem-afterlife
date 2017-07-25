import React from 'react';
import {string, shape} from 'prop-types';
import Link from 'components/Link';
import {withStyles} from 'styles';
import {defaults} from 'utils';
import calculateStyles from './calculateStyles';


export const LogotypePure = ({styles, className}) => {
    const linkClassName = `${styles.logotypeContainer} ${className || defaults.emptyString}`;
    return (
        <Link className={linkClassName} to='/'>
            <div className={styles.logotype} />
        </Link>
    );
};

LogotypePure.propTypes = {
    styles: shape().isRequired,
    className: string
};

LogotypePure.defaultProps = {
    className: defaults.emptyString
};

export default withStyles(theme => calculateStyles(theme))(LogotypePure);