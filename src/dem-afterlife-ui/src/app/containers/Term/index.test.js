/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0 , react/jsx-filename-extension:0 */

import React from 'react';
import {mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Term from './index';

describe('Term', () => {
    const mockStore = configureMockStore();

    it('component match expected snapshot for simple term', () => {
        const props = {
            store: mockStore({sharedReducer: {locale: 'ru'} }),
            term: {id: 1, value: 'Тем'}
        };
        expect(mount(<Term {...props} />, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component match expected snapshot for simple term and untermedPostfix', () => {
        const props = {
            store: mockStore({sharedReducer: {locale: 'ru'} }),
            term: {id: 1, value: 'Тем'},
            untermedPostfix: ':'
        };
        expect(mount(<Term {...props} />, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component match expected snapshot for not term and untermedPostfix', () => {
        const props = {
            store: mockStore({sharedReducer: {locale: 'ru'} }),
            doNotTerm: true,
            untermedPostfix: ':'
        };
        expect(mount(<Term {...props} />, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component match expected snapshot for term with space before', () => {
        const props = {
            store: mockStore({sharedReducer: {locale: 'ru'} }),
            term: {id: 1, value: 'Тем'},
            spaceBefore: true
        };
        expect(mount(<Term {...props} />, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component match expected snapshot for simple term with space after', () => {
        const props = {
            store: mockStore({sharedReducer: {locale: 'ru'} }),
            term: {id: 1, value: 'Тем'},
            spaceAfter: true
        };
        expect(mount(<Term {...props} />, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component match expected snapshot for simple term with space before and after', () => {
        const props = {
            store: mockStore({sharedReducer: {locale: 'ru'} }),
            term: {id: 1, value: 'Тем'},
            spaceBefore: true,
            spaceAfter: true
        };
        expect(mount(<Term {...props} />, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component match expected snapshot for term with indent before', () => {
        const props = {
            store: mockStore({sharedReducer: {locale: 'ru'} }),
            term: {id: 1, value: 'Тем'},
            indentBefore: true
        };
        expect(mount(<Term {...props} />, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component match expected snapshot for simple term with indent after', () => {
        const props = {
            store: mockStore({sharedReducer: {locale: 'ru'} }),
            term: {id: 1, value: 'Тем'},
            indentAfter: true
        };
        expect(mount(<Term {...props} />, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component match expected snapshot for simple term with indent before and after', () => {
        const props = {
            store: mockStore({sharedReducer: {locale: 'ru'} }),
            term: {id: 1, value: 'Тем'},
            indentBefore: true,
            indentAfter: true
        };
        expect(mount(<Term {...props} />, {lifecycleExperimental: true})).toMatchSnapshot();
    });
});
