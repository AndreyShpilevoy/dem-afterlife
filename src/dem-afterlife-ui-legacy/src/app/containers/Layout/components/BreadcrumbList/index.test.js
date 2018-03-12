/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import {BreadcrumbListPure} from './index';


jest.mock('../BreadcrumbListItem');

describe('BreadcrumbList Pure', () => {
    const classes = {
        list: 'list'
    };

    it('component should mach snapshot for 1 breadcrumb', () => {
        const breadcrumbArray = [{title: 'Conference', path: '/', order: 1}];
        expect(shallow(
            <BreadcrumbListPure
                classes={classes}
                breadcrumbArray={breadcrumbArray} />
        )).toMatchSnapshot();
    });

    it('component should mach snapshot for 4 breadcrumbs', () => {
        const breadcrumbArray = [
            {title: 'Conference 1', path: '/1', order: 1},
            {title: 'Conference 2', path: '/2', order: 2},
            {title: 'Conference 3', path: '/3', order: 3},
            {title: 'Conference 4', path: '/4', order: 4}
        ];
        expect(shallow(
            <BreadcrumbListPure
                classes={classes}
                breadcrumbArray={breadcrumbArray} />
        )).toMatchSnapshot();
    });

    it('component should mach snapshot for 6 breadcrumbs', () => {
        const breadcrumbArray = [
            {title: 'Conference 1', path: '/1', order: 1},
            {title: 'Conference 2', path: '/2', order: 2},
            {title: 'Conference 3', path: '/3', order: 3},
            {title: 'Conference 4', path: '/4', order: 4},
            {title: 'Conference 5', path: '/5', order: 5},
            {title: 'Conference 6', path: '/6', order: 6}
        ];
        expect(shallow(
            <BreadcrumbListPure
                classes={classes}
                breadcrumbArray={breadcrumbArray} />
        )).toMatchSnapshot();
    });
});
