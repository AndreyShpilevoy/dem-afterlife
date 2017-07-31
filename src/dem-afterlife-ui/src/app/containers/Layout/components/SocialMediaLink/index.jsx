import React from 'react';
import {string, shape, number} from 'prop-types';
import SvgIconsMapper from 'components/SvgIconsMapper';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';


const SocialMediaLink = ({className, socialMediaLinkItem, styles}) =>
    (<a className={styles.focus} href={socialMediaLinkItem.href} title={socialMediaLinkItem.title} target='_blank' rel='noopener noreferrer'>
        <SvgIconsMapper className={className} iconName={socialMediaLinkItem.svgImageName} />
    </a>);

SocialMediaLink.propTypes = {
    className: string,
    styles: shape().isRequired,
    socialMediaLinkItem: shape({
        id: number.isRequired,
        title: string.isRequired,
        href: string.isRequired,
        svgImageName: string.isRequired,
        order: number.isRequired
    }).isRequired
};

SocialMediaLink.defaultProps = {
    className: ''
};

export default withStyles(theme => calculateStyles(theme))(SocialMediaLink);