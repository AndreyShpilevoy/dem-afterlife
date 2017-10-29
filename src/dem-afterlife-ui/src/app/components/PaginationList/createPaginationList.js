import {
    generateFullPaginationList,
    generateStartPaginationList,
    generateMiddlePaginationList,
    generateEndPaginationList
} from './paginationListCreators';

const createPaginationList = (paginationItemsCount, pageNumber, maxListLength, offsetListLength, shortList) => {
    if (paginationItemsCount <= 1) {
        return [];
    } else if (shortList && paginationItemsCount < 6) { // generate a full short list
        return generateFullPaginationList(paginationItemsCount, 0);
    } else if (shortList && paginationItemsCount >= 6) { // generate a short list with ellipsis
        return generateEndPaginationList(paginationItemsCount, 0, maxListLength, 1);
    } else if (paginationItemsCount <= maxListLength) { // - generate 9/5 items
        return generateFullPaginationList(paginationItemsCount, pageNumber);
    } else if (pageNumber < offsetListLength + 1) { // - generate 8/4 first items and 1 last item
        return generateStartPaginationList(paginationItemsCount, pageNumber, maxListLength);
    } else if (pageNumber <= paginationItemsCount - offsetListLength) { // - generate 1 first item, 7/3 items in the middle and 1 last item
        return generateMiddlePaginationList(paginationItemsCount, pageNumber, maxListLength);
    }

    // - generate 1 first item and 8/4 1 last items
    return generateEndPaginationList(paginationItemsCount, pageNumber, maxListLength, offsetListLength);
};

export default createPaginationList;