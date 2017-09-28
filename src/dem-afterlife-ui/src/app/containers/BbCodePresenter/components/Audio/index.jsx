/* eslint-disable jsx-a11y/media-has-caption */

import React from 'react';
import {string} from 'prop-types';
import Term from 'containers/Term';

const Audio = ({src, type}) => {
    const audioTerm = {id: 28, value: 'Audio'};
    return (
        <audio controls>
            <source src={src} type={type} />
            <a href={src}><Term term={audioTerm} /></a>
        </audio>
    );
};

Audio.propTypes = {
    type: string.isRequired,
    src: string.isRequired
};

export default Audio;