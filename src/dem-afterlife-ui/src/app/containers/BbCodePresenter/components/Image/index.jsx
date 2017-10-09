import React from 'react';
import {string} from 'prop-types';

const Image = ({url}) =>
    <img alt={url} src={url} />;
Image.propTypes = {
    url: string.isRequired
};

export default Image;
