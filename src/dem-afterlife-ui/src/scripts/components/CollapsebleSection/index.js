/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React, {Component} from 'react';
import {node, bool, string, shape} from 'prop-types';
import {ClassNamesPropType} from 'aesthetic';
import Column from 'components/Column';
import Hidden from 'components/Hidden';
import Row from 'components/Row';
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
            defaultCollapsebleState: bool.isRequired,
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
            defaultCollapsebleState: false,
            isCollapseble: true
        }
    };

    constructor(props, defaultProps) {
        super(props, defaultProps);
        const collapseSettings = props.collapseSettings || defaultProps.collapseSettings;

        this.state = {
            collapsedState: false,
            collapsedByDefault: collapseSettings.defaultCollapsebleState,
            isCollapseble: collapseSettings.isCollapseble
        };
    }

    handleTitleClick = value => {
        this.setState({collapsedState: value});
    }

    getRotatedImageComponent = () => null;

    render() {
        const {collapsedState, collapsedByDefault, isCollapseble} = this.state;
        const {children, headerSettings, classNames} = this.props;
        const {title, firstColumnTerm, secondColumnTerm, thirdColumnTerm} =
            headerSettings || this.defaultProps.headerSettings;
        const bodyHolder = `${classNames.bodyHolder} ${collapsedState ? 'closed' : ''}`;
        return (
            <div className={classNames.general}>
                <Row className={classNames.header} onClick={() => this.handleTitleClick(!collapsedState)}>
                    <Column lg={6} className={`${classNames.headerText} ${classNames.headerHolder}`}>
                        <span className={classNames.title}>
                            {title}
                        </span>
                    </Column>
                    <Column lg={6} className={classNames.headerHolder}>
                        <Hidden md={'down'}>
                            <Row>
                                <Column lg={3} className={classNames.headerText}>
                                    {firstColumnTerm}
                                </Column>
                                <Column lg={3} className={classNames.headerText}>
                                    {secondColumnTerm}
                                </Column>
                                <Column lg={6} className={classNames.headerText}>
                                    {thirdColumnTerm}
                                </Column>
                            </Row>
                        </Hidden>
                    </Column>
                    {this.getRotatedImageComponent()}
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