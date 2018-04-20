/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-this: 0 */

import React, { Component } from "react";
import { node, bool, string, shape, oneOfType } from "prop-types";
import Column from "components/Column";
import Hidden from "components/Hidden";
import Row from "components/Row";
import SvgIconsMapper from "containers/SvgIconsMapper";
import { concatStyleNames, injectSheet } from "styles";
import calculateStyles from "./calculateStyles";

export class CollapsibleSectionPure extends Component {
  static propTypes = {
    classes: shape().isRequired,
    children: node.isRequired,
    headerSettings: shape({
      title: oneOfType([string, node]),
      firstColumnTerm: node,
      secondColumnTerm: node,
      thirdColumnTerm: node
    }),
    collapseSettings: shape({
      collapsedByDefault: bool.isRequired,
      isCollapsible: bool.isRequired
    })
  };
  static defaultProps = {
    headerSettings: {
      title: null,
      firstColumnTerm: null,
      secondColumnTerm: null,
      thirdColumnTerm: null
    },
    collapseSettings: {
      collapsedByDefault: false,
      isCollapsible: true
    }
  };

  constructor(props) {
    super(props);
    const { collapsedByDefault, isCollapsible } = props.collapseSettings;
    this.state = {
      collapsedState: collapsedByDefault,
      isCollapsible
    };
  }

  handleTitleClick = value => {
    const { isCollapsible } = this.state;
    if (isCollapsible) {
      this.setState({ collapsedState: value });
    }
  };

  render() {
    const { collapsedState, isCollapsible } = this.state;
    const { children, headerSettings, classes } = this.props;
    const {
      title,
      firstColumnTerm,
      secondColumnTerm,
      thirdColumnTerm
    } = headerSettings;
    const {
      bodyHolder,
      headerCursor,
      headerArrow,
      headerText,
      headerHolder,
      general,
      header,
      titleClass,
      termedSection,
      headerColumn,
      headerArrowHolder,
      body
    } = classes;
    const classNameForClosedClass = collapsedState ? "closed" : "";
    const bodyHolderClass = concatStyleNames([
      bodyHolder,
      ...(isCollapsible ? headerCursor : ""),
      classNameForClosedClass
    ]);
    const headerArrowClass = concatStyleNames([
      headerArrow,
      classNameForClosedClass
    ]);
    const headerTextHolder = concatStyleNames([headerText, headerHolder]);
    const rowOnClick = () => this.handleTitleClick(!collapsedState);

    return (
      <div className={general}>
        <Row className={header} onClick={rowOnClick}>
          <Column md={11} lg={6} className={headerTextHolder}>
            <span className={titleClass}>{title}</span>
          </Column>
          <Column md={1} lg={6} className={headerHolder}>
            <Hidden md="down" className={termedSection}>
              <Row>
                <Column lg={3} className={headerColumn}>
                  <div className={headerText}>{firstColumnTerm}</div>
                </Column>
                <Column lg={3} className={headerColumn}>
                  <div className={headerText}>{secondColumnTerm}</div>
                </Column>
                <Column lg={6} className={headerColumn}>
                  <div className={headerText}>{thirdColumnTerm}</div>
                </Column>
              </Row>
            </Hidden>
            {isCollapsible ? (
              <Hidden sm="down" lg="up" className={headerArrowHolder}>
                <SvgIconsMapper
                  className={headerArrowClass}
                  iconName="SortLeft"
                />
              </Hidden>
            ) : (
              ""
            )}
          </Column>
        </Row>
        <div className={bodyHolderClass}>
          <div className={body}>{children}</div>
        </div>
      </div>
    );
  }
}

export default injectSheet(calculateStyles, {
  componentName: "CollapsibleSection"
})(CollapsibleSectionPure);
