/* eslint global-require:0 */
import React from 'react';
import {string} from 'prop-types';
import Link from 'components/Link';

const SvgIconsMapper = ({className, iconName}) => {
    const avaliableIcons = {
        Steam: require('components/Steam').default,
        Vk: require('components/Vk').default
    };
    const SelectedIcon = avaliableIcons[iconName] ? avaliableIcons[iconName] : Link;
    return <SelectedIcon className={className}/>;
};

SvgIconsMapper.propTypes = {
    className: string,
    iconName: string
};

export default SvgIconsMapper;