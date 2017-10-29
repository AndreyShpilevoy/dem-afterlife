import React from 'react';
import {string, shape, number} from 'prop-types';
import {injectSheet} from 'styles';
import PaginationItem from 'components/PaginationItem';
import calculateStyles from './calculateStyles';
import createPaginationList from './createPaginationList';

const mapPaginationList = (containerName, containerId, paginationList) =>
    paginationList.map(item =>
        <PaginationItem key={item.key} containerName={containerName} containerId={containerId} value={item} />
    );

export const PaginationListPure = ({classes, pagination, containerName, containerId}) => {
    const {pageNumber, pageSize, totalItemsCount} = pagination;
    const paginationItemsCount = Math.ceil(totalItemsCount / pageSize);
    const maxListLength = 9;
    const offsetListLength = 6;
    const paginationList = createPaginationList(paginationItemsCount, pageNumber, maxListLength, offsetListLength);
    return (
        <div className={classes.list}>
            {mapPaginationList(containerName, containerId, paginationList)}
        </div>
    );
};

PaginationListPure.propTypes = {
    classes: shape().isRequired,
    containerName: string.isRequired,
    containerId: number.isRequired,
    pagination: shape({
        pageNumber: number.isRequired,
        pageSize: number.isRequired,
        totalItemsCount: number.isRequired
    }).isRequired
};

export default injectSheet(calculateStyles, {componentName: 'PaginationList'})(PaginationListPure);