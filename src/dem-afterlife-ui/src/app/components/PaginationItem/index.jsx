import React from 'react';
import {string, shape, number, bool, oneOfType} from 'prop-types';
import {injectSheet, concatStyleNames} from 'styles';
import Link from 'components/Link';
import calculateStyles from './calculateStyles';

const ellipsisString = '...';

const getEllipsis = classes => {
    const ellipsisClasses = concatStyleNames([classes.item, classes.ellipsis]);
    return (
        <span className={ellipsisClasses}>
            {ellipsisString}
        </span>
    );
};
const getButton = (value, path, classes) => {
    const activeClasses = concatStyleNames([classes.item, classes.active]);
    return value.active ?
        <span className={activeClasses}>
            {value.page}
        </span> :
        <Link className={classes.item} to={path}>
            {value.page}
        </Link>;
};

export const PaginationItemPure = ({classes, value, containerName, containerId}) => {
    const path = `/${containerName}/${containerId}/page${value.page}`;
    return (
        value.isEllipsis ? getEllipsis(classes) : getButton(value, path, classes)
    );
};

PaginationItemPure.propTypes = {
    classes: shape().isRequired,
    containerName: string.isRequired,
    containerId: number.isRequired,
    value: shape({
        key: number.isRequired,
        page: oneOfType([string, number]).isRequired,
        active: bool.isRequired,
        isEllipsis: bool.isRequired
    }).isRequired
};

export default injectSheet(calculateStyles, {componentName: 'PaginationItem'})(PaginationItemPure);