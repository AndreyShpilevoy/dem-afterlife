import React from 'react';
import {string, shape, number} from 'prop-types';
import SvgIconsMapper from 'components/SvgIconsMapper';


const SocialMediaLink = ({className, socialMediaLinkItem}) =>
    <a href={socialMediaLinkItem.href} title={socialMediaLinkItem.title} target='_blank' rel='noopener noreferrer'>
        <SvgIconsMapper className={className} iconName={socialMediaLinkItem.svgImageName}/>
    </a>;

SocialMediaLink.propTypes = {
    className: string,
    socialMediaLinkItem: shape({
        id: number.isRequired,
        title: string.isRequired,
        href: string.isRequired,
        svgImageName: string.isRequired,
        order: number.isRequired
    }).isRequired
};

export default SocialMediaLink;