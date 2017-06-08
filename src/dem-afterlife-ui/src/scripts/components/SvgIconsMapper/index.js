/* eslint global-require:0 */
import React from 'react';
import {string} from 'prop-types';
import IconLink from 'components/IconLink';

const SvgIconsMapper = ({className, iconName}) => {
    const avaliableIcons = {
        IconSteam: require('components/IconSteam').default,
        IconVk: require('components/IconVk').default,
        IconSortLeft: require('components/IconSortLeft').default
    };
    const SelectedIcon = avaliableIcons[iconName] ? avaliableIcons[iconName] : IconLink;
    return <SelectedIcon className={className}/>;
};

SvgIconsMapper.propTypes = {
    className: string,
    iconName: string
};

export default SvgIconsMapper;