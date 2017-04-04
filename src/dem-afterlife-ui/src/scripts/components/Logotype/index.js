import React from 'react';
import Link from 'react-router-dom/Link';
import {ClassNamesPropType} from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';


export const LogotypePure = ({classNames}) =>
    <Link className={classNames.logotypeContainer} to='/'>
        <div className={classNames.logotype} />
    </Link>;

LogotypePure.propTypes = {
    classNames: ClassNamesPropType
};

export default styler(theme => calculateStyles(theme))(LogotypePure);