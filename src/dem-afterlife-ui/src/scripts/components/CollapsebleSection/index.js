/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-this: 0*/

import React, {PureComponent} from 'react';
import {node, bool, string, shape, object} from 'prop-types';
import Column from 'components/Column';
import Hidden from 'components/Hidden';
import Row from 'components/Row';
import SvgIconsMapper from 'components/SvgIconsMapper';
import {css, withStyles} from 'styles';
import calculateStyles from './calculateStyles';

export class CollapsebleSectionPure extends PureComponent {
    static propTypes = {
        styles: object.isRequired,
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
        const {children, headerSettings, styles} = this.props;
        const {title, firstColumnTerm, secondColumnTerm, thirdColumnTerm} = headerSettings;
        const {bodyHolder, headerCursor, headerArrow, headerText, headerHolder, general, header, titleClass,
            termedSection, headerColumn, headerArrowHolder, body} = styles;
        const classNameForClosedClass = collapsedState ? 'closed' : '';
        const bodyHolderClass = css([bodyHolder, ...isCollapseble ? headerCursor : '', classNameForClosedClass]);
        const headerArrowClass = css([headerArrow, classNameForClosedClass]);
        const headerTextHolder = css([headerText, headerHolder]);
        const rowOnClick = () => this.handleTitleClick(!collapsedState);

        return (
            <div className={general}>
                <Row className={header} onClick={rowOnClick}>
                    <Column md={11} lg={6} className={headerTextHolder}>
                        <span className={titleClass}>
                            {title}
                        </span>
                    </Column>
                    <Column md={1} lg={6} className={headerHolder}>
                        <Hidden md={'down'} className={termedSection}>
                            <Row>
                                <Column lg={3} className={headerColumn}>
                                    <div className={headerText}>
                                        {firstColumnTerm}
                                    </div>
                                </Column>
                                <Column lg={3} className={headerColumn}>
                                    <div className={headerText}>
                                        {secondColumnTerm}
                                    </div>
                                </Column>
                                <Column lg={6} className={headerColumn}>
                                    <div className={headerText}>
                                        {thirdColumnTerm}
                                    </div>
                                </Column>
                            </Row>
                        </Hidden>
                        <Hidden sm={'down'} lg={'up'} className={headerArrowHolder}>
                            <SvgIconsMapper className={headerArrowClass} iconName={'IconSortLeft'}/>
                        </Hidden>
                    </Column>
                </Row>
                <div className={bodyHolderClass}>
                    <div className={body}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(theme => calculateStyles(theme), {pureComponent: true})(CollapsebleSectionPure);