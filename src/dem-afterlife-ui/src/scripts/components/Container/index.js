import React, { PropTypes } from 'react';
import { ClassNamesPropType } from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

const constructClassNameString = (className, classNames) =>
    className ? `${classNames.container} ${className}` : classNames.container;

const Container = ({ children, className, classNames }) =>
    <div className={constructClassNameString(className, classNames)}>
        {children}
    </div>;

const {string, node} = PropTypes;
Container.propTypes = {
    className: string,
    classNames: ClassNamesPropType,
    children: node
};

export default styler((theme) => (calculateStyles(theme)))(Container);