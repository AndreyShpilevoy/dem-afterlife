import React from 'react';
import {string, node, object} from 'prop-types';
import {sharedPropTypes} from 'utils';
import Notification from 'containers/Notification';
import Container from 'components/Container';
import Row from 'components/Row';
import Column from 'components/Column';
import Header from 'components/Header';
import Footer from 'components/Footer';
import {css, withStyles, ThemeProvider} from 'styles';
import globalStyles from './globalStyles';
import calculateStyles from './calculateStyles';

export const PresentationPure = ({children, themeName, navigationLinkArray, socialMediaLinkArray, styles}) =>
    <ThemeProvider name={themeName}>
        <div className={css(styles.contentWrapper)}>
            <Container className={css(styles.container)}>
                {/* title*/}
                <Notification />
                <Row>
                    <Header navigationLinkArray={navigationLinkArray}/>
                </Row>
                <Row className={css(styles.content)}>
                    <Column xs={12}>
                        {children}
                    </Column>
                </Row>
                <Row>
                    <Footer socialMediaLinkArray={socialMediaLinkArray}/>
                </Row>
            </Container>
        </div>
    </ThemeProvider>;

PresentationPure.propTypes = {
    styles: object.isRequired,
    children: node,
    themeName: string,
    navigationLinkArray: sharedPropTypes.navigationLinkArray,
    socialMediaLinkArray: sharedPropTypes.socialMediaLinkArray
};

export default withStyles(theme => ({...globalStyles(), ...calculateStyles(theme)}))(PresentationPure);