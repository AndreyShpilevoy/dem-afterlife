/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import React from 'react';
import {mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import LocaleDateTime from './index';

describe('LocaleDateTime HOC', () => {
    const mockStore = configureMockStore();

    it('component match expected snapshot for locale date', () => {
        const props = {
            store: mockStore({layoutReducer: {locale: 'ru'} }),
            localeDateTime: new Date('2017-06-02')
        };
        expect(mount(<LocaleDateTime {...props}/>, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component match expected snapshot for locale date with spase before', () => {
        const props = {
            store: mockStore({layoutReducer: {locale: 'ru'} }),
            localeDateTime: new Date('2017-06-02'),
            spaceBefore: true
        };
        expect(mount(<LocaleDateTime {...props}/>, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component match expected snapshot for locale date with spase after', () => {
        const props = {
            store: mockStore({layoutReducer: {locale: 'ru'} }),
            localeDateTime: new Date('2017-06-02'),
            spaceAfter: true
        };
        expect(mount(<LocaleDateTime {...props}/>, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component match expected snapshot for locale date with spase before and after', () => {
        const props = {
            store: mockStore({layoutReducer: {locale: 'ru'} }),
            localeDateTime: new Date('2017-06-02'),
            spaceBefore: true,
            spaceAfter: true
        };
        expect(mount(<LocaleDateTime {...props}/>, {lifecycleExperimental: true})).toMatchSnapshot();
    });
});
