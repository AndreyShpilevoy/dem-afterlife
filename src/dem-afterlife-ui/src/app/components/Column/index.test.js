/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import {ColumnPure} from './index';


describe('Column Pure', () => {
    const classes = {
        'col-lg-0': 'default-Column-col-lg-0',
        'col-lg-1': 'default-Column-col-lg-1',
        'col-lg-10': 'default-Column-col-lg-10',
        'col-lg-11': 'default-Column-col-lg-11',
        'col-lg-12': 'default-Column-col-lg-12',
        'col-lg-2': 'default-Column-col-lg-2',
        'col-lg-3': 'default-Column-col-lg-3',
        'col-lg-4': 'default-Column-col-lg-4',
        'col-lg-5': 'default-Column-col-lg-5',
        'col-lg-6': 'default-Column-col-lg-6',
        'col-lg-7': 'default-Column-col-lg-7',
        'col-lg-8': 'default-Column-col-lg-8',
        'col-lg-9': 'default-Column-col-lg-9',
        'col-lgOffset-0': 'default-Column-col-lgOffset-0',
        'col-lgOffset-1': 'default-Column-col-lgOffset-1',
        'col-lgOffset-10': 'default-Column-col-lgOffset-10',
        'col-lgOffset-11': 'default-Column-col-lgOffset-11',
        'col-lgOffset-12': 'default-Column-col-lgOffset-12',
        'col-lgOffset-2': 'default-Column-col-lgOffset-2',
        'col-lgOffset-3': 'default-Column-col-lgOffset-3',
        'col-lgOffset-4': 'default-Column-col-lgOffset-4',
        'col-lgOffset-5': 'default-Column-col-lgOffset-5',
        'col-lgOffset-6': 'default-Column-col-lgOffset-6',
        'col-lgOffset-7': 'default-Column-col-lgOffset-7',
        'col-lgOffset-8': 'default-Column-col-lgOffset-8',
        'col-lgOffset-9': 'default-Column-col-lgOffset-9',
        'col-md-0': 'default-Column-col-md-0',
        'col-md-1': 'default-Column-col-md-1',
        'col-md-10': 'default-Column-col-md-10',
        'col-md-11': 'default-Column-col-md-11',
        'col-md-12': 'default-Column-col-md-12',
        'col-md-2': 'default-Column-col-md-2',
        'col-md-3': 'default-Column-col-md-3',
        'col-md-4': 'default-Column-col-md-4',
        'col-md-5': 'default-Column-col-md-5',
        'col-md-6': 'default-Column-col-md-6',
        'col-md-7': 'default-Column-col-md-7',
        'col-md-8': 'default-Column-col-md-8',
        'col-md-9': 'default-Column-col-md-9',
        'col-mdOffset-0': 'default-Column-col-mdOffset-0',
        'col-mdOffset-1': 'default-Column-col-mdOffset-1',
        'col-mdOffset-10': 'default-Column-col-mdOffset-10',
        'col-mdOffset-11': 'default-Column-col-mdOffset-11',
        'col-mdOffset-12': 'default-Column-col-mdOffset-12',
        'col-mdOffset-2': 'default-Column-col-mdOffset-2',
        'col-mdOffset-3': 'default-Column-col-mdOffset-3',
        'col-mdOffset-4': 'default-Column-col-mdOffset-4',
        'col-mdOffset-5': 'default-Column-col-mdOffset-5',
        'col-mdOffset-6': 'default-Column-col-mdOffset-6',
        'col-mdOffset-7': 'default-Column-col-mdOffset-7',
        'col-mdOffset-8': 'default-Column-col-mdOffset-8',
        'col-mdOffset-9': 'default-Column-col-mdOffset-9',
        'col-sm-0': 'default-Column-col-sm-0',
        'col-sm-1': 'default-Column-col-sm-1',
        'col-sm-10': 'default-Column-col-sm-10',
        'col-sm-11': 'default-Column-col-sm-11',
        'col-sm-12': 'default-Column-col-sm-12',
        'col-sm-2': 'default-Column-col-sm-2',
        'col-sm-3': 'default-Column-col-sm-3',
        'col-sm-4': 'default-Column-col-sm-4',
        'col-sm-5': 'default-Column-col-sm-5',
        'col-sm-6': 'default-Column-col-sm-6',
        'col-sm-7': 'default-Column-col-sm-7',
        'col-sm-8': 'default-Column-col-sm-8',
        'col-sm-9': 'default-Column-col-sm-9',
        'col-smOffset-0': 'default-Column-col-smOffset-0',
        'col-smOffset-1': 'default-Column-col-smOffset-1',
        'col-smOffset-10': 'default-Column-col-smOffset-10',
        'col-smOffset-11': 'default-Column-col-smOffset-11',
        'col-smOffset-12': 'default-Column-col-smOffset-12',
        'col-smOffset-2': 'default-Column-col-smOffset-2',
        'col-smOffset-3': 'default-Column-col-smOffset-3',
        'col-smOffset-4': 'default-Column-col-smOffset-4',
        'col-smOffset-5': 'default-Column-col-smOffset-5',
        'col-smOffset-6': 'default-Column-col-smOffset-6',
        'col-smOffset-7': 'default-Column-col-smOffset-7',
        'col-smOffset-8': 'default-Column-col-smOffset-8',
        'col-smOffset-9': 'default-Column-col-smOffset-9',
        'col-xl-0': 'default-Column-col-xl-0',
        'col-xl-1': 'default-Column-col-xl-1',
        'col-xl-10': 'default-Column-col-xl-10',
        'col-xl-11': 'default-Column-col-xl-11',
        'col-xl-12': 'default-Column-col-xl-12',
        'col-xl-2': 'default-Column-col-xl-2',
        'col-xl-3': 'default-Column-col-xl-3',
        'col-xl-4': 'default-Column-col-xl-4',
        'col-xl-5': 'default-Column-col-xl-5',
        'col-xl-6': 'default-Column-col-xl-6',
        'col-xl-7': 'default-Column-col-xl-7',
        'col-xl-8': 'default-Column-col-xl-8',
        'col-xl-9': 'default-Column-col-xl-9',
        'col-xlOffset-0': 'default-Column-col-xlOffset-0',
        'col-xlOffset-1': 'default-Column-col-xlOffset-1',
        'col-xlOffset-10': 'default-Column-col-xlOffset-10',
        'col-xlOffset-11': 'default-Column-col-xlOffset-11',
        'col-xlOffset-12': 'default-Column-col-xlOffset-12',
        'col-xlOffset-2': 'default-Column-col-xlOffset-2',
        'col-xlOffset-3': 'default-Column-col-xlOffset-3',
        'col-xlOffset-4': 'default-Column-col-xlOffset-4',
        'col-xlOffset-5': 'default-Column-col-xlOffset-5',
        'col-xlOffset-6': 'default-Column-col-xlOffset-6',
        'col-xlOffset-7': 'default-Column-col-xlOffset-7',
        'col-xlOffset-8': 'default-Column-col-xlOffset-8',
        'col-xlOffset-9': 'default-Column-col-xlOffset-9',
        'col-xs-0': 'default-Column-col-xs-0',
        'col-xs-1': 'default-Column-col-xs-1',
        'col-xs-10': 'default-Column-col-xs-10',
        'col-xs-11': 'default-Column-col-xs-11',
        'col-xs-12': 'default-Column-col-xs-12',
        'col-xs-2': 'default-Column-col-xs-2',
        'col-xs-3': 'default-Column-col-xs-3',
        'col-xs-4': 'default-Column-col-xs-4',
        'col-xs-5': 'default-Column-col-xs-5',
        'col-xs-6': 'default-Column-col-xs-6',
        'col-xs-7': 'default-Column-col-xs-7',
        'col-xs-8': 'default-Column-col-xs-8',
        'col-xs-9': 'default-Column-col-xs-9',
        'col-xsOffset-0': 'default-Column-col-xsOffset-0',
        'col-xsOffset-1': 'default-Column-col-xsOffset-1',
        'col-xsOffset-10': 'default-Column-col-xsOffset-10',
        'col-xsOffset-11': 'default-Column-col-xsOffset-11',
        'col-xsOffset-12': 'default-Column-col-xsOffset-12',
        'col-xsOffset-2': 'default-Column-col-xsOffset-2',
        'col-xsOffset-3': 'default-Column-col-xsOffset-3',
        'col-xsOffset-4': 'default-Column-col-xsOffset-4',
        'col-xsOffset-5': 'default-Column-col-xsOffset-5',
        'col-xsOffset-6': 'default-Column-col-xsOffset-6',
        'col-xsOffset-7': 'default-Column-col-xsOffset-7',
        'col-xsOffset-8': 'default-Column-col-xsOffset-8',
        'col-xsOffset-9': 'default-Column-col-xsOffset-9'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<ColumnPure classes={classes}><div>Column content</div></ColumnPure>)).toMatchSnapshot();
    });

    it('component with xs="1" md="3" xl="12" xsOffset="1" mdOffset="3" xlOffset="12" match expected snapshot', () => {
        expect(shallow(<ColumnPure xs={1} md={3} xl='12' xsOffset='1' mdOffset='3' xlOffset='12' classes={classes}><div>Column content</div></ColumnPure>)).toMatchSnapshot();
    });

    it('component with wrong xs="wrong" match expected snapshot', () => {
        expect(shallow(<ColumnPure xs='wrong' classes={classes}><div>Column content</div></ColumnPure>)).toMatchSnapshot();
    });
});