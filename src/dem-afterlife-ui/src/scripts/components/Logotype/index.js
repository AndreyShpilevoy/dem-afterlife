import React from 'react';
import Link from 'react-router-dom/Link';
import { ClassNamesPropType } from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';


const Logotype = ({ classNames }) =>
    <Link to='/'>
        <div className={classNames.logotype} />
    </Link>;

Logotype.propTypes = {
    classNames: ClassNamesPropType,
};

export default styler((theme) => (calculateStyles(theme)))(Logotype);