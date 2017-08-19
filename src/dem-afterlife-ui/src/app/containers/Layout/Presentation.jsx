import React from 'react';
import {node, shape} from 'prop-types';
import {sharedPropTypes} from 'utils';
import Notification from 'containers/Notification';
import Container from 'components/Container';
import Row from 'components/Row';
import Column from 'components/Column';
import {injectSheet} from 'styles';
import BreadcrumbList from './components/BreadcrumbList';
import Header from './components/Header';
import Footer from './components/Footer';
import calculateStyles from './calculateStyles';

export const PresentationPure = ({children, navigationLinkArray, socialMediaLinkArray, breadcrumbArray, classes}) => {
    const {contentWrapper, container, content} = classes;
    return (
        <div className={contentWrapper}>
            <Container className={container}>
                {/* title */}
                <Notification />
                <Row>
                    <Header navigationLinkArray={navigationLinkArray} />
                </Row>
                <Row className={content}>
                    <Column xs={12}>
                        <BreadcrumbList breadcrumbArray={breadcrumbArray} />
                        {children}
                        <BreadcrumbList breadcrumbArray={breadcrumbArray} />
                    </Column>
                </Row>
                <Row>
                    <Footer socialMediaLinkArray={socialMediaLinkArray} />
                </Row>
            </Container>
        </div>);
};

PresentationPure.propTypes = {
    classes: shape().isRequired,
    children: node.isRequired,
    navigationLinkArray: sharedPropTypes.navigationLinkArray.isRequired,
    socialMediaLinkArray: sharedPropTypes.socialMediaLinkArray.isRequired,
    breadcrumbArray: sharedPropTypes.breadcrumbArray.isRequired
};

export default injectSheet(calculateStyles, {componentName: 'LayoutPresentation'})(PresentationPure);