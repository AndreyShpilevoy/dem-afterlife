/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React, {Component} from 'react';
import {node, bool, string, shape} from 'prop-types';
import {ClassNamesPropType} from 'aesthetic';
import Column from 'components/Column';
import Hidden from 'components/Hidden';
import Row from 'components/Row';
import SvgIconsMapper from 'components/SvgIconsMapper';
import styler from 'styles/styler';
import calculateStyles from './calculateStyles';

export class CollapsebleSectionPure extends Component {
    static propTypes = {
        classNames: ClassNamesPropType,
        className: string,
        children: node,
        headerSettings: shape({
            title: string,
            firstColumnTerm: node,
            secondColumnTerm: node,
            thirdColumnTerm: node
        }),
        collapseSettings: shape({
            collapsedByDefault: bool.isRequired,
            isCollapseble: bool.isRequired
        })
    }
    ;
    static defaultProps = {
        headerSettings: {
            title: null,
            firstColumnTerm: null,
            secondColumnTerm: null,
            thirdColumnTerm: null
        },
        collapseSettings: {
            collapsedByDefault: false,
            isCollapseble: true
        }
    };

    constructor(props) {
        super(props);
        const {collapsedByDefault, isCollapseble} = props.collapseSettings;
        this.state = {
            collapsedState: collapsedByDefault,
            isCollapseble
        };
    }

    handleTitleClick = value => {
        const {isCollapseble} = this.state;
        if (isCollapseble) {
            this.setState({collapsedState: value});
        }
    }

    render() {
        const {collapsedState, isCollapseble} = this.state;
        const {children, headerSettings, classNames} = this.props;
        const {title, firstColumnTerm, secondColumnTerm, thirdColumnTerm} = headerSettings;
        const bodyHolder = `${classNames.bodyHolder} ${isCollapseble ? classNames.headerCursor : ''} ${collapsedState ? 'closed' : ''}`;
        const headerArrow = `${classNames.headerArrow} ${collapsedState ? 'closed' : ''}`;
        const headerTextHolder = `${classNames.headerText} ${classNames.headerHolder}`;
        return (
            <div className={classNames.general}>
                <Row className={classNames.header} onClick={() => this.handleTitleClick(!collapsedState)}>
                    <Column md={11} lg={6} className={headerTextHolder}>
                        <span className={classNames.title}>
                            {title}
                        </span>
                    </Column>
                    <Column md={1} lg={6} className={classNames.headerHolder}>
                        <Hidden md={'down'} className={classNames.termedSection}>
                            <Row>
                                <Column lg={3} className={classNames.headerColumn}>
                                    <div className={classNames.headerText}>
                                        {firstColumnTerm}
                                    </div>
                                </Column>
                                <Column lg={3} className={classNames.headerColumn}>
                                    <div className={classNames.headerText}>
                                        {secondColumnTerm}
                                    </div>
                                </Column>
                                <Column lg={6} className={classNames.headerColumn}>
                                    <div className={classNames.headerText}>
                                        {thirdColumnTerm}
                                    </div>
                                </Column>
                            </Row>
                        </Hidden>
                        <Hidden sm={'down'} lg={'up'} className={classNames.headerArrowHolder}>
                            <SvgIconsMapper className={headerArrow} iconName={'SortLeft'}/>
                        </Hidden>
                    </Column>
                </Row>
                <div className={bodyHolder}>
                    <div className={classNames.body}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default styler(theme => calculateStyles(theme))(CollapsebleSectionPure);