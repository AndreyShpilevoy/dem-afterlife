import React from 'react';
import {node, shape, string} from 'prop-types';
import {sharedPropTypes, root} from 'utils';
import Notification from 'containers/Notification';
import Container from 'components/Container';
import Row from 'components/Row';
import Column from 'components/Column';
import {injectSheet} from 'styles';
import BreadcrumbList from './components/BreadcrumbList';
import Header from './components/Header';
import Footer from './components/Footer';
import calculateStyles from './calculateStyles';

export const PresentationPure = ({children, navigationLinkArray, socialMediaLinkArray, breadcrumbArray, title, classes}) => {
    root.document.title = title; // eslint-disable-line fp/no-mutation
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
    title: string.isRequired,
    classes: shape().isRequired,
    children: node.isRequired,
    navigationLinkArray: sharedPropTypes.navigationLinkArray.isRequired,
    socialMediaLinkArray: sharedPropTypes.socialMediaLinkArray.isRequired,
    breadcrumbArray: sharedPropTypes.breadcrumbArray.isRequired
};

export default injectSheet(calculateStyles, {componentName: 'LayoutPresentation'})(PresentationPure);