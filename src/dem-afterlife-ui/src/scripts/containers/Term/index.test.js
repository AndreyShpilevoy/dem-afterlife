/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import React from 'react';
import {mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Term from './index';

describe('Term HOC', () => {
    const mockStore = configureMockStore();

    it('component match expected snapshot for simple term', () => {
        const props = {
            store: mockStore({layoutReducer: {locale: 'ru'} }),
            term: {id: 1, value: 'Тем'}
        };
        expect(mount(<Term {...props}/>, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component match expected snapshot for term with spase before', () => {
        const props = {
            store: mockStore({layoutReducer: {locale: 'ru'} }),
            term: {id: 1, value: 'Тем'},
            spaceBefore: true
        };
        expect(mount(<Term {...props}/>, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component match expected snapshot for simple term with spase after', () => {
        const props = {
            store: mockStore({layoutReducer: {locale: 'ru'} }),
            term: {id: 1, value: 'Тем'},
            spaceAfter: true
        };
        expect(mount(<Term {...props}/>, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component match expected snapshot for simple term with spase before and after', () => {
        const props = {
            store: mockStore({layoutReducer: {locale: 'ru'} }),
            term: {id: 1, value: 'Тем'},
            spaceBefore: true,
            spaceAfter: true
        };
        expect(mount(<Term {...props}/>, {lifecycleExperimental: true})).toMatchSnapshot();
    });
});
