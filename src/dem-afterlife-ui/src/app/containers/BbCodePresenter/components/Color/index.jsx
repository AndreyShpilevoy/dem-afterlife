import React from 'react';
import {node, string} from 'prop-types';

const Color = ({children, options}) => (
    <span style={options ? {color: options} : {}}>
        {children}
    </span>
);

Color.propTypes = {
    children: node.isRequired,
    options: string // eslint-disable-line react/require-default-props
};

export default Color;