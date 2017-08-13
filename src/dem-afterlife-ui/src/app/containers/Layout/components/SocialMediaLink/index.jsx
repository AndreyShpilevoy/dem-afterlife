import React from 'react';
import {string, shape, number} from 'prop-types';
import SvgIconsMapper from 'containers/SvgIconsMapper';
import {withStyles} from 'styles';
import calculateStyles from './calculateStyles';


export const SocialMediaLinkPure = ({className, socialMediaLinkItem, styles}) =>
    (<a className={styles.focus} href={socialMediaLinkItem.href} title={socialMediaLinkItem.title} target='_blank' rel='noopener noreferrer'>
        <SvgIconsMapper className={className} iconName={socialMediaLinkItem.svgImageName} />
    </a>);

SocialMediaLinkPure.propTypes = {
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

SocialMediaLinkPure.defaultProps = {
    className: ''
};

export default withStyles(theme => calculateStyles(theme))(SocialMediaLinkPure);