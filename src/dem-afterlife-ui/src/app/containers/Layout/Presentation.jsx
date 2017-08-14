import React from 'react';
import {string, node, shape} from 'prop-types';
import {sharedPropTypes} from 'utils';
import Notification from 'containers/Notification';
import Breadcrumbs from 'containers/Breadcrumbs';
import Container from 'components/Container';
import Row from 'components/Row';
import Column from 'components/Column';
import {withStyles, ThemeProvider} from 'styles';
import Header from './components/Header';
import Footer from './components/Footer';
import globalStyles from './globalStyles';
import calculateStyles from './calculateStyles';

export const PresentationPure = ({children, themeName, navigationLinkArray, socialMediaLinkArray, breadcrumbArray, styles}) => {
    const {contentWrapper, container, content, breadcrumbs} = styles;
    return (<ThemeProvider name={themeName}>
        <div className={contentWrapper}>
            <Container className={container}>
                {/* title */}
                <Notification />
                <Row>
                    <Header navigationLinkArray={navigationLinkArray} />
                </Row>
                <Row className={breadcrumbs}>
                    <Column xs={12}>
                        <Breadcrumbs breadcrumbArray={breadcrumbArray} />
                    </Column>
                </Row>
                <Row className={content}>
                    <Column xs={12}>
                        {children}
                    </Column>
                </Row>
                <Row className={breadcrumbs}>
                    <Column xs={12}>
                        <Breadcrumbs breadcrumbArray={breadcrumbArray} />
                    </Column>
                </Row>
                <Row>
                    <Footer socialMediaLinkArray={socialMediaLinkArray} />
                </Row>
            </Container>
        </div>
    </ThemeProvider>);
};

PresentationPure.propTypes = {
    styles: shape().isRequired,
    children: node.isRequired,
    themeName: string,
    navigationLinkArray: sharedPropTypes.navigationLinkArray.isRequired,
    socialMediaLinkArray: sharedPropTypes.socialMediaLinkArray.isRequired,
    breadcrumbArray: sharedPropTypes.breadcrumbArray.isRequired
};

PresentationPure.defaultProps = {
    themeName: 'default'
};

export default withStyles(theme => ({...globalStyles(), ...calculateStyles(theme)}))(PresentationPure);