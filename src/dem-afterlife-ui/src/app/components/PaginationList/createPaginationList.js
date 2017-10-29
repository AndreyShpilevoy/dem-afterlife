import {
    generateFullPaginationList,
    generateStartPaginationList,
    generateMiddlePaginationList,
    generateEndPaginationList
} from './paginationListCreators';

const createPaginationList = (paginationItemsCount, pageNumber, maxListLength, offsetListLength) => {
    if (paginationItemsCount === 0) {
        return [];
    } else if (paginationItemsCount <= maxListLength) { // - draw 9/5 items
        return generateFullPaginationList(paginationItemsCount, pageNumber);
    } else if (pageNumber < offsetListLength + 1) { // - draw 8/4 first items and 1 last item
        return generateStartPaginationList(paginationItemsCount, pageNumber, maxListLength);
    } else if (pageNumber <= paginationItemsCount - offsetListLength) { // - draw 1 first item, 7/3 items in the middle and 1 last item
        return generateMiddlePaginationList(paginationItemsCount, pageNumber, maxListLength);
    }

    // - draw 1 first item and 8/4 1 last items
    return generateEndPaginationList(paginationItemsCount, pageNumber, maxListLength, offsetListLength);
};

export default createPaginationList;