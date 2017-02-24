import React, { PropTypes } from 'react';
import { ClassNamesPropType } from 'aesthetic';
import styler from 'styles/styler';


const Row = ({ reverse, children, classNames }) =>
    <div className={reverse ? `${classNames.row} reverse` : classNames.row}>
        {children}
    </div>;

const {bool, node} = PropTypes;
Row.propTypes = {
    classNames: ClassNamesPropType,
    children: node,
    reverse: bool
};

export default styler(() => ({
    row: {
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flex: 'initial',
        flexDirection: 'row',
        flexWrap: 'wrap',
        '&.reverse': {
            flexDirection: 'row-reverse'
        }
    }
}))(Row);