/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import {ColumnPure} from './index';

jest.mock('styles/styler');

describe('Column Pure', () => {
    const classNames = {
        'col-lg-0': 'col-lg-0-0-78',
        'col-lg-1': 'col-lg-1-0-80',
        'col-lg-10': 'col-lg-10-0-98',
        'col-lg-11': 'col-lg-11-0-100',
        'col-lg-12': 'col-lg-12-0-102',
        'col-lg-2': 'col-lg-2-0-82',
        'col-lg-3': 'col-lg-3-0-84',
        'col-lg-4': 'col-lg-4-0-86',
        'col-lg-5': 'col-lg-5-0-88',
        'col-lg-6': 'col-lg-6-0-90',
        'col-lg-7': 'col-lg-7-0-92',
        'col-lg-8': 'col-lg-8-0-94',
        'col-lg-9': 'col-lg-9-0-96',
        'col-lgOffset-0': 'col-lgOffset-0-0-79',
        'col-lgOffset-1': 'col-lgOffset-1-0-81',
        'col-lgOffset-10': 'col-lgOffset-10-0-99',
        'col-lgOffset-11': 'col-lgOffset-11-0-101',
        'col-lgOffset-12': 'col-lgOffset-12-0-103',
        'col-lgOffset-2': 'col-lgOffset-2-0-83',
        'col-lgOffset-3': 'col-lgOffset-3-0-85',
        'col-lgOffset-4': 'col-lgOffset-4-0-87',
        'col-lgOffset-5': 'col-lgOffset-5-0-89',
        'col-lgOffset-6': 'col-lgOffset-6-0-91',
        'col-lgOffset-7': 'col-lgOffset-7-0-93',
        'col-lgOffset-8': 'col-lgOffset-8-0-95',
        'col-lgOffset-9': 'col-lgOffset-9-0-97',
        'col-md-0': 'col-md-0-0-52',
        'col-md-1': 'col-md-1-0-54',
        'col-md-10': 'col-md-10-0-72',
        'col-md-11': 'col-md-11-0-74',
        'col-md-12': 'col-md-12-0-76',
        'col-md-2': 'col-md-2-0-56',
        'col-md-3': 'col-md-3-0-58',
        'col-md-4': 'col-md-4-0-60',
        'col-md-5': 'col-md-5-0-62',
        'col-md-6': 'col-md-6-0-64',
        'col-md-7': 'col-md-7-0-66',
        'col-md-8': 'col-md-8-0-68',
        'col-md-9': 'col-md-9-0-70',
        'col-mdOffset-0': 'col-mdOffset-0-0-53',
        'col-mdOffset-1': 'col-mdOffset-1-0-55',
        'col-mdOffset-10': 'col-mdOffset-10-0-73',
        'col-mdOffset-11': 'col-mdOffset-11-0-75',
        'col-mdOffset-12': 'col-mdOffset-12-0-77',
        'col-mdOffset-2': 'col-mdOffset-2-0-57',
        'col-mdOffset-3': 'col-mdOffset-3-0-59',
        'col-mdOffset-4': 'col-mdOffset-4-0-61',
        'col-mdOffset-5': 'col-mdOffset-5-0-63',
        'col-mdOffset-6': 'col-mdOffset-6-0-65',
        'col-mdOffset-7': 'col-mdOffset-7-0-67',
        'col-mdOffset-8': 'col-mdOffset-8-0-69',
        'col-mdOffset-9': 'col-mdOffset-9-0-71',
        'col-sm-0': 'col-sm-0-0-26',
        'col-sm-1': 'col-sm-1-0-28',
        'col-sm-10': 'col-sm-10-0-46',
        'col-sm-11': 'col-sm-11-0-48',
        'col-sm-12': 'col-sm-12-0-50',
        'col-sm-2': 'col-sm-2-0-30',
        'col-sm-3': 'col-sm-3-0-32',
        'col-sm-4': 'col-sm-4-0-34',
        'col-sm-5': 'col-sm-5-0-36',
        'col-sm-6': 'col-sm-6-0-38',
        'col-sm-7': 'col-sm-7-0-40',
        'col-sm-8': 'col-sm-8-0-42',
        'col-sm-9': 'col-sm-9-0-44',
        'col-smOffset-0': 'col-smOffset-0-0-27',
        'col-smOffset-1': 'col-smOffset-1-0-29',
        'col-smOffset-10': 'col-smOffset-10-0-47',
        'col-smOffset-11': 'col-smOffset-11-0-49',
        'col-smOffset-12': 'col-smOffset-12-0-51',
        'col-smOffset-2': 'col-smOffset-2-0-31',
        'col-smOffset-3': 'col-smOffset-3-0-33',
        'col-smOffset-4': 'col-smOffset-4-0-35',
        'col-smOffset-5': 'col-smOffset-5-0-37',
        'col-smOffset-6': 'col-smOffset-6-0-39',
        'col-smOffset-7': 'col-smOffset-7-0-41',
        'col-smOffset-8': 'col-smOffset-8-0-43',
        'col-smOffset-9': 'col-smOffset-9-0-45',
        'col-xl-0': 'col-xl-0-0-104',
        'col-xl-1': 'col-xl-1-0-106',
        'col-xl-10': 'col-xl-10-0-124',
        'col-xl-11': 'col-xl-11-0-126',
        'col-xl-12': 'col-xl-12-0-128',
        'col-xl-2': 'col-xl-2-0-108',
        'col-xl-3': 'col-xl-3-0-110',
        'col-xl-4': 'col-xl-4-0-112',
        'col-xl-5': 'col-xl-5-0-114',
        'col-xl-6': 'col-xl-6-0-116',
        'col-xl-7': 'col-xl-7-0-118',
        'col-xl-8': 'col-xl-8-0-120',
        'col-xl-9': 'col-xl-9-0-122',
        'col-xlOffset-0': 'col-xlOffset-0-0-105',
        'col-xlOffset-1': 'col-xlOffset-1-0-107',
        'col-xlOffset-10': 'col-xlOffset-10-0-125',
        'col-xlOffset-11': 'col-xlOffset-11-0-127',
        'col-xlOffset-12': 'col-xlOffset-12-0-129',
        'col-xlOffset-2': 'col-xlOffset-2-0-109',
        'col-xlOffset-3': 'col-xlOffset-3-0-111',
        'col-xlOffset-4': 'col-xlOffset-4-0-113',
        'col-xlOffset-5': 'col-xlOffset-5-0-115',
        'col-xlOffset-6': 'col-xlOffset-6-0-117',
        'col-xlOffset-7': 'col-xlOffset-7-0-119',
        'col-xlOffset-8': 'col-xlOffset-8-0-121',
        'col-xlOffset-9': 'col-xlOffset-9-0-123',
        'col-xs-0': 'col-xs-0-0-0',
        'col-xs-1': 'col-xs-1-0-2',
        'col-xs-10': 'col-xs-10-0-20',
        'col-xs-11': 'col-xs-11-0-22',
        'col-xs-12': 'col-xs-12-0-24',
        'col-xs-2': 'col-xs-2-0-4',
        'col-xs-3': 'col-xs-3-0-6',
        'col-xs-4': 'col-xs-4-0-8',
        'col-xs-5': 'col-xs-5-0-10',
        'col-xs-6': 'col-xs-6-0-12',
        'col-xs-7': 'col-xs-7-0-14',
        'col-xs-8': 'col-xs-8-0-16',
        'col-xs-9': 'col-xs-9-0-18',
        'col-xsOffset-0': 'col-xsOffset-0-0-1',
        'col-xsOffset-1': 'col-xsOffset-1-0-3',
        'col-xsOffset-10': 'col-xsOffset-10-0-21',
        'col-xsOffset-11': 'col-xsOffset-11-0-23',
        'col-xsOffset-12': 'col-xsOffset-12-0-25',
        'col-xsOffset-2': 'col-xsOffset-2-0-5',
        'col-xsOffset-3': 'col-xsOffset-3-0-7',
        'col-xsOffset-4': 'col-xsOffset-4-0-9',
        'col-xsOffset-5': 'col-xsOffset-5-0-11',
        'col-xsOffset-6': 'col-xsOffset-6-0-13',
        'col-xsOffset-7': 'col-xsOffset-7-0-15',
        'col-xsOffset-8': 'col-xsOffset-8-0-17',
        'col-xsOffset-9': 'col-xsOffset-9-0-19'
    };

    it('component match expected snapshot', () => {
        expect(shallow(<ColumnPure classNames={classNames}><div>{'Column content'}</div></ColumnPure>)).toMatchSnapshot();
    });

    it('component with xs="1" md="3" xl="12" xsOffset="1" mdOffset="3" xlOffset="12" match expected snapshot', () => {
        expect(shallow(<ColumnPure xs={1} md={3} xl='12' xsOffset='1' mdOffset='3' xlOffset='12' classNames={classNames}><div>{'Column content'}</div></ColumnPure>)).toMatchSnapshot();
    });

    it('component with wrong xs="wrong" match expected snapshot', () => {
        expect(shallow(<ColumnPure xs='wrong' classNames={classNames}><div>{'Column content'}</div></ColumnPure>)).toMatchSnapshot();
    });
});
