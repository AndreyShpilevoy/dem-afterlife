import React, { PropTypes } from 'react';
import { ClassNamesPropType } from 'aesthetic';
import styler from 'styles/styler';

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

export const constructStylesFromTheme = ({grid}) =>
    grid.containers.reduce((previouse, current) => (
        Object.assign({}, previouse, {
            [`@media (${current.min})`]: {
                container: {
                    width: current.width,
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }
            }
        })
    ), {});

export default styler((theme) => (constructStylesFromTheme(theme)))(Container);