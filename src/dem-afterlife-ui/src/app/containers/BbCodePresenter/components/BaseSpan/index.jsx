import React from 'react';
import {node, string, shape} from 'prop-types';

const BaseSpan = ({children, className, styleObject}) => (
    <span className={className} style={styleObject}>
        {children}
    </span>
);

BaseSpan.propTypes = {
    children: node.isRequired,
    className: string,
    styleObject: shape()
};

export default BaseSpan;
