import React from "react";
import { string, shape, number, bool, oneOfType } from "prop-types";
import { injectSheet, concatStyleNames } from "styles";
import Link from "components/Link";
import calculateStyles from "./calculateStyles";

const ellipsisString = "...";

const getEllipsis = (classes, smallClassName) => {
  const ellipsisClassName = concatStyleNames([
    classes.item,
    classes.ellipsis,
    smallClassName
  ]);
  return <span className={ellipsisClassName}>{ellipsisString}</span>;
};
const getButton = (value, path, classes, smallClassName) => {
  const itemClassName = concatStyleNames([classes.item, smallClassName]);
  const activeClassName = concatStyleNames([itemClassName, classes.active]);
  return value.active ? (
    <span className={activeClassName}>{value.page}</span>
  ) : (
    <Link className={itemClassName} to={path}>
      {value.page}
    </Link>
  );
};

export const PaginationItemPure = ({
  classes,
  value,
  containerName,
  containerId,
  isSmall
}) => {
  const path = `/${containerName}/${containerId}/page${value.page}`;
  const smallClassName = isSmall ? classes.small : {};
  return value.isEllipsis
    ? getEllipsis(classes, smallClassName)
    : getButton(value, path, classes, smallClassName);
};

PaginationItemPure.displayName = "PaginationItemPure";

PaginationItemPure.propTypes = {
  classes: shape().isRequired,
  containerName: string.isRequired,
  containerId: number.isRequired,
  value: shape({
    key: number.isRequired,
    page: oneOfType([string, number]).isRequired,
    active: bool.isRequired,
    isEllipsis: bool.isRequired
  }).isRequired,
  isSmall: bool
};

PaginationItemPure.defaultProps = {
  isSmall: false
};

export default injectSheet(calculateStyles, {
  componentName: "PaginationItem"
})(PaginationItemPure);
