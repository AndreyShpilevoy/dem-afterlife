/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import * as utils from 'utils';
import LocaleDateTime from './index';

utils.localization.getLocaleDateTime = jest.fn(() => 'Jun 2, 2017, 3:00 AM');

describe('LocaleDateTime', () => {
    const mockStore = configureMockStore();

    it('component match expected snapshot for locale date', () => {
        const props = {
            store: mockStore({sharedReducer: {locale: 'ru'} }),
            localeDateTime: new Date('2017-06-02')
        };
        expect(mount(<LocaleDateTime {...props} />, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component match expected snapshot for locale date with space before', () => {
        const props = {
            store: mockStore({sharedReducer: {locale: 'ru'} }),
            localeDateTime: new Date('2017-06-02'),
            spaceBefore: true
        };
        expect(mount(<LocaleDateTime {...props} />, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component match expected snapshot for locale date with space after', () => {
        const props = {
            store: mockStore({sharedReducer: {locale: 'ru'} }),
            localeDateTime: new Date('2017-06-02'),
            spaceAfter: true
        };
        expect(mount(<LocaleDateTime {...props} />, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component match expected snapshot for locale date with space before and after', () => {
        const props = {
            store: mockStore({sharedReducer: {locale: 'ru'} }),
            localeDateTime: new Date('2017-06-02'),
            spaceBefore: true,
            spaceAfter: true
        };
        expect(mount(<LocaleDateTime {...props} />, {lifecycleExperimental: true})).toMatchSnapshot();
    });
});
