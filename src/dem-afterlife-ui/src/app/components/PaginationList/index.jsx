import React from 'react';
import {string, shape, number, bool} from 'prop-types';
import {injectSheet} from 'styles';
import Link from 'components/Link';
import calculateStyles from './calculateStyles';

const getPaginationList = ({pageNumber, pageSize, totalItemsCount}, shortList) => {
    const paginationItemsCount = Math.ceil(totalItemsCount / pageSize);
    const maxListLength = shortList ? 5 : 10;
    const offsetListLength = shortList ? 3 : 7;

    if (totalItemsCount <= maxListLength) { // - draw all items

    } else if (pageNumber >= 1 && pageNumber < offsetListLength) { // - draw 9/4 first items and 1 last item

    } else if (pageNumber >= offsetListLength && pageNumber < paginationItemsCount - offsetListLength) { // - draw 1 first item, 7/3 items in the middle and 1 last item

    } else { // - draw 1 last item and 9/4 1 first items

    }

    return [];
};

const mapNavigationLinks = (containerName, paginationList) =>
    paginationList.map(item =>
        <Link key={item.id} to={`/${containerName}/id=${10}&page=${2}`} />
    );

export const PaginationListPure = ({classes, className, pagination, containerName, shortList}) => {
    const paginationList = getPaginationList(pagination, shortList);
    return (
        <ul>
            {mapNavigationLinks(containerName, paginationList)}
        </ul>
    );
};

PaginationListPure.propTypes = {
    classes: shape().isRequired,
    className: string,
    containerName: string.isRequired,
    pagination: shape({
        pageNumber: number.isRequired,
        pageSize: number.isRequired,
        totalItemsCount: number.isRequired
    }).isRequired,
    shortList: bool
};

PaginationListPure.defaultProps = {
    className: '',
    shortList: false
};

export default injectSheet(calculateStyles, {componentName: 'PaginationList'})(PaginationListPure);