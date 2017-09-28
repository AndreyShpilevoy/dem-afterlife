/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import {number, string} from 'prop-types';

const Iframe = ({height, width, src}) => (
    <iframe
        title='This is a unique title'
        width={width}
        height={height}
        src={src}
        allowFullScreen
        frameBorder='0' />
);

Iframe.propTypes = {
    height: number.isRequired,
    width: number.isRequired,
    src: string.isRequired
};

export default Iframe;