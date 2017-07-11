/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import React from 'react';
import {mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import RelativeDateTime from './index';

jest.mock('utils/localization', () => ({
    getRelativeDateTime: () => 'some time ago'
}));

describe('RelativeDateTime', () => {
    const mockStore = configureMockStore();

    it('component match expected snapshot for relative date', () => {
        const props = {
            store: mockStore({layoutReducer: {locale: 'ru'} }),
            relativeDateTime: new Date('2017-06-02')
        };
        expect(mount(<RelativeDateTime {...props}/>, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component match expected snapshot for relative date with space before', () => {
        const props = {
            store: mockStore({layoutReducer: {locale: 'ru'} }),
            relativeDateTime: new Date('2017-06-02'),
            spaceBefore: true
        };
        expect(mount(<RelativeDateTime {...props}/>, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component match expected snapshot for relative date with space after', () => {
        const props = {
            store: mockStore({layoutReducer: {locale: 'ru'} }),
            relativeDateTime: new Date('2017-06-02'),
            spaceAfter: true
        };
        expect(mount(<RelativeDateTime {...props}/>, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component match expected snapshot for relative date with space before and after', () => {
        const props = {
            store: mockStore({layoutReducer: {locale: 'ru'} }),
            relativeDateTime: new Date('2017-06-02'),
            spaceBefore: true,
            spaceAfter: true
        };
        expect(mount(<RelativeDateTime {...props}/>, {lifecycleExperimental: true})).toMatchSnapshot();
    });
});
