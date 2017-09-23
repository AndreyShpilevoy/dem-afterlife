/* eslint global-require:0 */
import React from 'react';
import {string} from 'prop-types';
import Error from './components/Error';

const SvgIconsMapper = ({className, iconName}) => {
    const availableIcons = {
        Steam: require('./components/Steam').default,
        Vk: require('./components/Vk').default,
        SortLeft: require('./components/SortLeft').default,
        SubForum: require('./components/SubForum').default,
        Link: require('./components/Link').default
    };
    const SelectedIcon = availableIcons[iconName] ? availableIcons[iconName] : Error;
    return <SelectedIcon className={className} />;
};

SvgIconsMapper.propTypes = {
    className: string,
    iconName: string.isRequired
};

SvgIconsMapper.defaultProps = {
    className: ''
};

export default SvgIconsMapper;