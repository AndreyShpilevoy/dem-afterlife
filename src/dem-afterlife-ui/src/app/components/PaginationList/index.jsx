import React from 'react';
import {string, shape, number, bool} from 'prop-types';
import {injectSheet} from 'styles';
import Link from 'components/Link';
import calculateStyles from './calculateStyles';
import generatePaginationList from './paginationArrayGenerators';

const mapPaginationList = (containerName, containerId, paginationList) =>
    paginationList.map(item => {
        const link = `/${containerName}/id=${containerId}&page=${item.page}`;
        return (
            <Link key={item.key} to={link} >
                {item.page}
            </Link>
        );
    });

export const PaginationListPure = ({classes, className, pagination, containerName, containerId}) => {
    const {pageNumber, pageSize, totalItemsCount} = pagination;
    const paginationItemsCount = Math.ceil(totalItemsCount / pageSize);
    const maxListLength = 9;
    const offsetListLength = 6;
    const paginationList = generatePaginationList(paginationItemsCount, pageNumber, maxListLength, offsetListLength);
    return (
        <ul>
            {mapPaginationList(containerName, containerId, paginationList)}
        </ul>
    );
};

PaginationListPure.propTypes = {
    classes: shape().isRequired,
    className: string,
    containerName: string.isRequired,
    containerId: number.isRequired,
    pagination: shape({
        pageNumber: number.isRequired,
        pageSize: number.isRequired,
        totalItemsCount: number.isRequired
    }).isRequired
};

PaginationListPure.defaultProps = {
    className: ''
};

export default injectSheet(calculateStyles, {componentName: 'PaginationList'})(PaginationListPure);