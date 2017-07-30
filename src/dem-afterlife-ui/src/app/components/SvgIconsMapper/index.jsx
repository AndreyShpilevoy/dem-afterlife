/* eslint global-require:0 */
import React from 'react';
import {string} from 'prop-types';
import IconLink from 'components/IconLink';

const SvgIconsMapper = ({className, iconName}) => {
    const availableIcons = {
        IconSteam: require('components/IconSteam').default,
        IconVk: require('components/IconVk').default,
        IconSortLeft: require('components/IconSortLeft').default,
        IconSubForum: require('components/IconSubForum').default
    };
    const SelectedIcon = availableIcons[iconName] ? availableIcons[iconName] : IconLink;
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