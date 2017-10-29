export const generateFullPaginationList = (paginationItemsCount, pageNumber) =>
    Array.from(Array(paginationItemsCount)).reduce((previous, current, index) => {
        const currentPageNumber = index + 1;
        return [
            ...previous,
            {
                key: currentPageNumber,
                page: currentPageNumber,
                active: currentPageNumber === pageNumber,
                isEllipsis: false
            }
        ];
    }, []);

export const generateStartPaginationList = (paginationItemsCount, pageNumber, maxListLength) =>
    Array.from(Array(paginationItemsCount)).reduce((previous, current, index) => {
        const currentPageNumber = index + 1;
        if (currentPageNumber < maxListLength) {
            return [
                ...previous,
                {
                    key: currentPageNumber,
                    page: currentPageNumber,
                    active: currentPageNumber === pageNumber,
                    isEllipsis: false
                }
            ];
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
            return [
                ...previous,
                {
                    key: currentPageNumber,
                    page: currentPageNumber,
                    active: currentPageNumber === pageNumber,
                    isEllipsis: false
                }
            ];
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
            return [
                ...previous,
                {
                    key: currentPageNumber,
                    page: currentPageNumber,
                    active: currentPageNumber === pageNumber,
                    isEllipsis: false
                }
            ];
        }
        return previous;
    }, []);
