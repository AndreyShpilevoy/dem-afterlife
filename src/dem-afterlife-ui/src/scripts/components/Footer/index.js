/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React from 'react';
import {} from 'prop-types';
import {ClassNamesPropType} from 'aesthetic';
import Container from 'components/Container';
import Column from 'components/Column';
import Hidden from 'components/Hidden';
import Row from 'components/Row';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

export const FooterPure = ({classNames}) =>
    <Container>
        <Row>
            <Column xs={12}>
                <div className={classNames.footer}>
                    <Row>
                        <Column xs={0} lg={4}/>
                        <Column xs={12} lg={4}>
                            <div className={classNames.copyright}>
                                {'DEM Team - 04.03.2007'}
                            </div>
                        </Column>
                        <Column xs={0} lg={4}>
                            <Hidden md={'down'}>
                                {'SocialMediaLinkArray'}
                            </Hidden>
                        </Column>
                    </Row>
                </div>
            </Column>
        </Row>
    </Container>
;

FooterPure.propTypes = {
    classNames: ClassNamesPropType
};

export default styler(theme => calculateStyles(theme))(FooterPure);