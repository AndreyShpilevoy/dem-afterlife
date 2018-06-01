/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import {number, string} from 'prop-types';
import Term from 'containers/Term';


const Video = ({height, width, src, type}) => {
    const videoTerm = {id: 29, value: 'Video'};
    return (
        <video width={width} height={height} controls>
            <source src={src} type={type} />
            <a href={src}>
                <Term term={videoTerm} />
            </a>
        </video>
    );
};

Video.propTypes = {
    height: number.isRequired,
    width: number.isRequired,
    type: string.isRequired,
    src: string.isRequired
};

export default Video;