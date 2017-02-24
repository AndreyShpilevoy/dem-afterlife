import React, { PropTypes } from 'react';
import { ClassNamesPropType } from 'aesthetic';
import styler from 'styles/styler';

export const constructClassNames = (sizesArray, classNames) =>(
    sizesArray.filter(size => size.count)
        .map((size) => `col-${ size.name }-${ size.count }`)
        .reduce((previouse, current) => `${ previouse } ${ classNames[ current ] }`, ''));

const Column = ({xs, sm, md, lg, xl, xsOffset, smOffset, mdOffset, lgOffset, xlOffset, children, classNames }) => {
    const classes = constructClassNames([
        { name: 'xs', count: xs },
        { name: 'sm', count: sm },
        { name: 'md', count: md },
        { name: 'lg', count: lg },
        { name: 'xl', count: xl },
        { name: 'xsOffset', count: xsOffset },
        { name: 'smOffset', count: smOffset },
        { name: 'mdOffset', count: mdOffset },
        { name: 'lgOffset', count: lgOffset },
        { name: 'xlOffset', count: xlOffset }], classNames);

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

const {node, number} = PropTypes;
Column.propTypes = {
    classNames: ClassNamesPropType,
    children: node,
    xs: number,
    sm: number,
    md: number,
    lg: number,
    xl: number,
    xsOffset: number,
    smOffset: number,
    mdOffset: number,
    lgOffset: number,
    xlOffset: number
};

export const calculateStyles = (size) =>
    [1,2,3,4,5,6,7,8,9,10,11,12].reduce((previouse, current) => {
        const columnSize = `${8.333333333333334*current}%`;
        return Object.assign({}, previouse, {
            [ `col-${ size }-${ current }` ]: {
                flexBasis: columnSize,
                maxWidth: columnSize
            },
            [ `col-${ size }Offset-${ current }` ]: {
                marginLeft: columnSize
            }
        });
    }, {});

export const constructStylesFromTheme = ({grid}) =>
    grid.containers.reduce((previouse, current) => (
        Object.assign({}, previouse, {
            [ `@media (${ current.min })` ]: calculateStyles(current.size)
        })
    ), {});

export default styler((theme) => (constructStylesFromTheme(theme)))(Column);