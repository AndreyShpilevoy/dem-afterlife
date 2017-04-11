import React from 'react';
import {string, node} from 'prop-types';
import {ClassNamesPropType} from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

const constructClassNameString = (className, classNames) =>
    className ? `${classNames.container} ${className}` : classNames.container;

export const ContainerPure = ({children, className, classNames}) =>
    <div className={constructClassNameString(className, classNames)}>
        {children}
    </div>;

ContainerPure.propTypes = {
    className: string,
    classNames: ClassNamesPropType,
    children: node
};

export default styler(theme => calculateStyles(theme))(ContainerPure);