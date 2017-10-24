export const generateFullPaginationList = (paginationItemsCount, pageNumber) =>
    Array.from(Array(paginationItemsCount)).reduce((previous, current, index) => {
        const currentPageNumber = index + 1;
        return [...previous, {key: currentPageNumber, page: currentPageNumber, active: currentPageNumber === pageNumber, isEllipsis: false}];
    }, []);

export const generateStartPaginationList = (paginationItemsCount, pageNumber, maxListLength) =>
    Array.from(Array(paginationItemsCount)).reduce((previous, current, index) => {
        const currentPageNumber = index + 1;
        if (currentPageNumber < maxListLength) {
            return [...previous, {key: currentPageNumber, page: currentPageNumber, active: currentPageNumber === pageNumber, isEllipsis: false}];
        } else if (currentPageNumber === paginationItemsCount) {
            return [
                ...previous,
                {key: 0, page: '...', active: false, isEllipsis: true},
                {key: currentPageNumber, page: currentPageNumber, active: currentPageNumber === pageNumber, isEllipsis: false}
            ];
        }
        return previous;
    }, []);

export const generateMiddlePaginationList = (paginationItemsCount, pageNumber, maxListLength) =>
    Array.from(Array(paginationItemsCount)).reduce((previous, current, index) => {
        const currentPageNumber = index + 1;
        const offset = (maxListLength - 3) / 2;
        if (currentPageNumber === 1) {
            return [
                ...previous,
                {key: currentPageNumber, page: currentPageNumber, active: currentPageNumber === pageNumber, isEllipsis: false},
                {key: 0, page: '...', active: false, isEllipsis: true}
            ];
        } else if (currentPageNumber >= pageNumber - offset && currentPageNumber <= pageNumber + offset) {
            return [...previous, {key: currentPageNumber, page: currentPageNumber, active: currentPageNumber === pageNumber, isEllipsis: false}];
        } else if (currentPageNumber === paginationItemsCount) {
            return [
                ...previous,
                {key: paginationItemsCount + 1, page: '...', active: false, isEllipsis: true},
                {key: currentPageNumber, page: currentPageNumber, active: currentPageNumber === pageNumber, isEllipsis: false}
            ];
        }
        return previous;
    }, []);

export const generateEndPaginationList = (paginationItemsCount, pageNumber, maxListLength, offsetListLength) =>
    Array.from(Array(paginationItemsCount)).reduce((previous, current, index) => {
        const currentPageNumber = index + 1;
        if (currentPageNumber === 1) {
            return [
                ...previous,
                {key: currentPageNumber, page: currentPageNumber, active: currentPageNumber === pageNumber, isEllipsis: false},
                {key: 0, page: '...', active: false, isEllipsis: true}
            ];
        } else if (currentPageNumber >= paginationItemsCount - offsetListLength - 1) {
            return [...previous, {key: currentPageNumber, page: currentPageNumber, active: currentPageNumber === pageNumber, isEllipsis: false}];
        }
        return previous;
    }, []);

const generatePaginationList = (paginationItemsCount, pageNumber, maxListLength, offsetListLength) => {
    if (paginationItemsCount === 0) {
        return [];
    } else if (paginationItemsCount <= maxListLength) { // - draw 9/5 items
        return generateFullPaginationList(paginationItemsCount, pageNumber);
    } else if (pageNumber < offsetListLength + 1) { // - draw 8/4 first items and 1 last item
        return generateStartPaginationList(paginationItemsCount, pageNumber, maxListLength);
    } else if (pageNumber <= paginationItemsCount - offsetListLength) { // - draw 1 first item, 7/3 items in the middle and 1 last item
        return generateMiddlePaginationList(paginationItemsCount, pageNumber, maxListLength);
    }

    // - draw 1 last item and 8/4 1 first items
    return generateEndPaginationList(paginationItemsCount, pageNumber, maxListLength, offsetListLength);
};

export default generatePaginationList;