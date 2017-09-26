/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BreadcrumbListItemPure} from './index';

configure({adapter: new Adapter()});

describe('BreadcrumbListItem Pure', () => {
    const classes = {
        arrow: 'arrow,',
        ellipsis: 'ellipsis,',
        item: 'item,',
        active: 'active'
    };

    it('component should mach Ellipsis snapshot', () => {
        const breadcrumb = {title: 'Conference', path: '/', order: 1};
        expect(shallow(
            <BreadcrumbListItemPure
                classes={classes}
                breadcrumb={breadcrumb}
                ellipsis />
        )).toMatchSnapshot();
    });

    it('component should mach Breadcrumb snapshot', () => {
        const breadcrumb = {title: 'Conference', path: '/', order: 1};
        expect(shallow(
            <BreadcrumbListItemPure
                classes={classes}
                breadcrumb={breadcrumb} />
        )).toMatchSnapshot();
    });

    it('component should mach Active Breadcrumb snapshot', () => {
        const breadcrumb = {title: 'Conference', path: '/', order: 1};
        expect(shallow(
            <BreadcrumbListItemPure
                classes={classes}
                breadcrumb={breadcrumb}
                isActive />
        )).toMatchSnapshot();
    });
});
