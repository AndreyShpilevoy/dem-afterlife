/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-this: 0 */

import React from 'react';
import {arrayOf, shape, number, string} from 'prop-types';
import Container from 'components/Container';
import Column from 'components/Column';
import Hidden from 'components/Hidden';
import Row from 'components/Row';
import {injectSheet} from 'styles';
import SocialMediaLink from '../SocialMediaLink';
import calculateStyles from './calculateStyles';

const copyright = 'DEM Team - 04.03.2007';
const mapSocialMediaArray = (socialMediaLinkArray, className) =>
    socialMediaLinkArray.map(item =>
        <SocialMediaLink key={item.id} className={className} socialMediaLinkItem={item} />);

export const FooterPure = ({classes, socialMediaLinkArray}) => (
    <Container>
        <Row>
            <Column xs={12}>
                <div className={classes.footer}>
                    <Row>
                        <Column xs={0} lg={4} />
                        <Column xs={12} lg={4}>
                            <div className={classes.copyright}>
                                {copyright}
                            </div>
                        </Column>
                        <Column xs={0} lg={4}>
                            <Hidden md='down'>
                                <div className={classes.socialMediaLinkIconContainer}>
                                    {mapSocialMediaArray(socialMediaLinkArray, classes.socialMediaLinkIcon)}
                                </div>
                            </Hidden>
                        </Column>
                    </Row>
                </div>
            </Column>
        </Row>
    </Container>
);

FooterPure.propTypes = {
    classes: shape().isRequired,
    socialMediaLinkArray: arrayOf(
        shape({
            id: number.isRequired,
            title: string.isRequired,
            href: string.isRequired,
            svgImageName: string.isRequired,
            order: number.isRequired
        })
    ).isRequired
};

export default injectSheet(calculateStyles, {componentName: 'Footer'})(FooterPure);