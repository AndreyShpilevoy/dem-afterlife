/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PaginationListPure} from './index';
import * as createPaginationList from './createPaginationList';

configure({adapter: new Adapter()});

describe('PaginationList Pure', () => {
    const classes = {list: 'list', small: 'small'};
    createPaginationList.default = () => [
        {key: 1, page: 1, active: true, isEllipsis: false},
        {key: 2, page: 2, active: false, isEllipsis: false},
        {key: 3, page: 3, active: false, isEllipsis: false}
    ];

    it('component match expected snapshot', () => {
        expect(shallow(
            <PaginationListPure
                pageNumber={1}
                pageSize={20}
                totalItemsCount={60}
                containerName='SomeContainer'
                containerId={1990}
                classes={classes} />
        )).toMatchSnapshot();
    });

    it('component with shortList flag match expected snapshot', () => {
        expect(shallow(
            <PaginationListPure
                shortList
                pageNumber={1}
                pageSize={20}
                totalItemsCount={60}
                containerName='SomeContainer'
                containerId={1990}
                classes={classes} />
        )).toMatchSnapshot();
    });
});
