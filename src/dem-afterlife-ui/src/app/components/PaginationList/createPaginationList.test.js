/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-mutation: 0, fp/no-nil: 0, import/no-duplicates: 0,react/jsx-filename-extension:0 */

import * as paginationListCreators from './paginationListCreators';
import createPaginationList from './createPaginationList';

describe('PaginationList arrayGenerator', () => {
    it('createPaginationList (default) when paginationItemsCount === 0 should return empty array ', () => {
        expect(createPaginationList(0, 0, 0, 0)).toEqual([]);
    });
    it('createPaginationList (default) when paginationItemsCount < maxListLength should call function generateFullPaginationList', () => {
        paginationListCreators.generateFullPaginationList = jest.fn();
        createPaginationList(2, 1, 3, 0);
        expect(paginationListCreators.generateFullPaginationList.mock.calls.length).toEqual(1);
    });
    it('createPaginationList (default) when paginationItemsCount = maxListLength should call function generateFullPaginationList', () => {
        paginationListCreators.generateFullPaginationList = jest.fn();
        createPaginationList(2, 2, 2, 0);
        expect(paginationListCreators.generateFullPaginationList.mock.calls.length).toEqual(1);
    });
    it('createPaginationList (default) when pageNumber < offsetListLength + 1 should call function generateStartPaginationList', () => {
        paginationListCreators.generateStartPaginationList = jest.fn();
        createPaginationList(5, 5, 1, 5);
        expect(paginationListCreators.generateStartPaginationList.mock.calls.length).toEqual(1);
    });
    it('createPaginationList (default) when pageNumber < paginationItemsCount - offsetListLength should call function generateMiddlePaginationList', () => {
        paginationListCreators.generateMiddlePaginationList = jest.fn();
        createPaginationList(5, 3, 1, 1);
        expect(paginationListCreators.generateMiddlePaginationList.mock.calls.length).toEqual(1);
    });
    it('createPaginationList (default) when pageNumber = paginationItemsCount - offsetListLength should call function generateMiddlePaginationList', () => {
        paginationListCreators.generateMiddlePaginationList = jest.fn();
        createPaginationList(5, 3, 1, 2);
        expect(paginationListCreators.generateMiddlePaginationList.mock.calls.length).toEqual(1);
    });
    it('createPaginationList (default) should call function generateEndPaginationList', () => {
        paginationListCreators.generateEndPaginationList = jest.fn();
        createPaginationList(21, 19, 10, 3);
        expect(paginationListCreators.generateEndPaginationList.mock.calls.length).toEqual(1);
    });
});
