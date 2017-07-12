import React from 'react';
import {string, node, shape} from 'prop-types';
import {sharedPropTypes} from 'utils';
import Notification from 'containers/Notification';
import Container from 'components/Container';
import Row from 'components/Row';
import Column from 'components/Column';
import {withStyles, ThemeProvider} from 'styles';
import Header from './components/Header';
import Footer from './components/Footer';
import globalStyles from './globalStyles';
import calculateStyles from './calculateStyles';

export const PresentationPure = ({children, themeName, navigationLinkArray, socialMediaLinkArray, styles}) => {
    const {contentWrapper, container, content} = styles;
    return <ThemeProvider name={themeName}>
        <div className={contentWrapper}>
            <Container className={container}>
                {/* title*/}
                <Notification />
                <Row>
                    <Header navigationLinkArray={navigationLinkArray}/>
                </Row>
                <Row className={content}>
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
};

PresentationPure.propTypes = {
    styles: shape().isRequired,
    children: node,
    themeName: string,
    navigationLinkArray: sharedPropTypes.navigationLinkArray,
    socialMediaLinkArray: sharedPropTypes.socialMediaLinkArray
};

export default withStyles(theme => ({...globalStyles(), ...calculateStyles(theme)}))(PresentationPure);