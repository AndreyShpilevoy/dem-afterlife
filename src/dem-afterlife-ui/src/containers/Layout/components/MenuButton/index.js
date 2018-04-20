/* eslint fp/no-class: 0, fp/no-nil: 0, fp/no-unused-expression: 0, fp/no-this: 0 */

import React, { Component } from "react";
import { func, shape } from "prop-types";
import { concatStyleNames, injectSheet } from "styles";
import { handleEnterKeyDown } from "utils";
import calculateStyles from "./calculateStyles";

export class MenuButtonPure extends Component {
  static propTypes = {
    classes: shape().isRequired,
    onClick: func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { opened: false };
  }

  menuButtonOnClick = () => {
    const { opened } = this.state;
    const { onClick } = this.props;
    this.setState({ opened: !opened });
    if (onClick) {
      onClick();
    }
  };

  handleKeyDown = event =>
    handleEnterKeyDown(event) ? this.menuButtonOnClick() : () => ({});

  render() {
    const { classes } = this.props;
    const {
      container,
      firstLine,
      secondLine,
      thirdLine,
      fourthLine,
      allLines
    } = classes;
    const { opened } = this.state;
    const openedClassName = opened ? "open" : "";
    const firstLineStyle = concatStyleNames([
      firstLine,
      allLines,
      openedClassName
    ]);
    const secondLineStyle = concatStyleNames([
      secondLine,
      allLines,
      openedClassName
    ]);
    const thirdLineStyle = concatStyleNames([
      thirdLine,
      allLines,
      openedClassName
    ]);
    const fourthLineStyle = concatStyleNames([
      fourthLine,
      allLines,
      openedClassName
    ]);
    return (
      <div
        className={container}
        onClick={this.menuButtonOnClick}
        onKeyDown={this.handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <div className={firstLineStyle} />
        <div className={secondLineStyle} />
        <div className={thirdLineStyle} />
        <div className={fourthLineStyle} />
      </div>
    );
  }
}

export default injectSheet(calculateStyles, { componentName: "MenuButton" })(
  MenuButtonPure
);
