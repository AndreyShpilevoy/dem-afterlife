import React from 'react';
import {string} from 'prop-types';
import Link from 'react-router-dom/Link';
import {ClassNamesPropType} from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';


export const LogotypePure = ({classNames, className}) =>
    <Link className={`${classNames.logotypeContainer} ${className || ''}`} to='/'>
        <div className={classNames.logotype} />
    </Link>;

LogotypePure.propTypes = {
    classNames: ClassNamesPropType,
    className: string
};

export default styler(theme => calculateStyles(theme))(LogotypePure);