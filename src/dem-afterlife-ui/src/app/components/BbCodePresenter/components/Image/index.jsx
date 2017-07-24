import React from 'react';
import {bool, string} from 'prop-types';

const Image = ({url, addBreak}) => (
    <span>
        <img alt={url} src={url} />
        {addBreak ? <br /> : ''}
    </span>
);

Image.propTypes = {
    url: string.isRequired,
    addBreak: bool
};

Image.defaultProps = {
    addBreak: false
};

export default Image;
