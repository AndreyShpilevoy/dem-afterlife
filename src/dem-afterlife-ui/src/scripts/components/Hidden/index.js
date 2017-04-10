import React from 'react';
import PropTypes from 'prop-types';
import {ClassNamesPropType} from 'aesthetic';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

const constructClassNames = (sizesArray, classNames) =>
    sizesArray.filter(size => size.direction === 'up' || size.direction === 'down' || size.direction === 'exact')
        .map(size => `hidden-${size.direction}-${size.name}`)
        .reduce((previouse, current) => `${previouse} ${classNames[current]}`, '');

export const HiddenPure = ({xs, sm, md, lg, xl, children, classNames}) => {
    const classes = constructClassNames(
        [
            {name: 'xs', direction: xs},
            {name: 'sm', direction: sm},
            {name: 'md', direction: md},
            {name: 'lg', direction: lg},
            {name: 'xl', direction: xl}
        ],
        classNames
    );

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

const {node, string} = PropTypes;
HiddenPure.propTypes = {
    classNames: ClassNamesPropType,
    children: node,
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string
};

export default styler(theme => calculateStyles(theme))(HiddenPure);