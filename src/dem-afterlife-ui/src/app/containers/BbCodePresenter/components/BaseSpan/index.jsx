import React from 'react';
import {node, string, shape} from 'prop-types';

const BaseSpan = ({children, className, styleObject}) => (
    <span className={className} style={styleObject}>
        {children}
    </span>
);

BaseSpan.propTypes = {
    children: node.isRequired,
    className: string.isRequired,
    styleObject: shape() // eslint-disable-line react/require-default-props
};

export default BaseSpan;
