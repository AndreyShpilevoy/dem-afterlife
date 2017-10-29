import React from 'react';
import {string, shape, number, bool} from 'prop-types';
import {injectSheet, concatStyleNames} from 'styles';
import PaginationItem from 'components/PaginationItem';
import calculateStyles from './calculateStyles';
import createPaginationList from './createPaginationList';

const mapPaginationList = (containerName, containerId, paginationList, shortList) =>
    paginationList.map(item =>
        (<PaginationItem
            key={item.key}
            containerName={containerName}
            containerId={containerId}
            value={item}
            isSmall={shortList} />)
    );

export const PaginationListPure = ({classes, containerName, containerId, shortList, pageNumber, pageSize, totalItemsCount}) => {
    const paginationItemsCount = Math.ceil(totalItemsCount / pageSize);
    const maxListLength = 9;
    const offsetListLength = 6;
    const paginationList = createPaginationList(paginationItemsCount, pageNumber, maxListLength, offsetListLength, shortList);
    const className = shortList ? concatStyleNames([classes.list, classes.small]) : classes.list;
    return (
        <div className={className}>
            {mapPaginationList(containerName, containerId, paginationList, shortList)}
        </div>
    );
};

PaginationListPure.propTypes = {
    classes: shape().isRequired,
    containerName: string.isRequired,
    containerId: number.isRequired,
    shortList: bool,
    pageNumber: number,
    pageSize: number.isRequired,
    totalItemsCount: number.isRequired
};

PaginationListPure.defaultProps = {
    shortList: false,
    pageNumber: 0
};

export default injectSheet(calculateStyles, {componentName: 'PaginationList'})(PaginationListPure);