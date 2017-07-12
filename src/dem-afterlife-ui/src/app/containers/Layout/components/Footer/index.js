/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React from 'react';
import {arrayOf, shape, number, string} from 'prop-types';
import Container from 'components/Container';
import Column from 'components/Column';
import Hidden from 'components/Hidden';
import Row from 'components/Row';
import {withStyles} from 'styles';
import SocialMediaLink from '../SocialMediaLink';
import calculateStyles from './calculateStyles';

const mapSocialMediaArray = (socialMediaLinkArray, className) =>
    socialMediaLinkArray.map((item, key) =>
        <SocialMediaLink key={key} className={className} socialMediaLinkItem={item}/>);

export const FooterPure = ({styles, socialMediaLinkArray}) =>
    <Container>
        <Row>
            <Column xs={12}>
                <div className={styles.footer}>
                    <Row>
                        <Column xs={0} lg={4}/>
                        <Column xs={12} lg={4}>
                            <div className={styles.copyright}>
                                {'DEM Team - 04.03.2007'}
                            </div>
                        </Column>
                        <Column xs={0} lg={4}>
                            <Hidden md={'down'}>
                                <div className={styles.socialMediaLinkIconContainer}>
                                    {mapSocialMediaArray(socialMediaLinkArray, styles.socialMediaLinkIcon)}
                                </div>
                            </Hidden>
                        </Column>
                    </Row>
                </div>
            </Column>
        </Row>
    </Container>
;

FooterPure.propTypes = {
    styles: shape().isRequired,
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

export default withStyles(theme => calculateStyles(theme))(FooterPure);