/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import React from 'react';
import {mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Layout from './index';

jest.mock('./Presentation', () => {
    const Presentation = ({children}) => <div>{children}</div>; // eslint-disable-line react/prop-types
    return Presentation;
});

describe('Layout HOC', () => {
    const mockStore = configureMockStore();

    it('component match expected snapshot', () => {
        const props = {store: mockStore({layoutReducer: {locale: 'ru'} })};
        expect(mount(<Layout {...props}><div>{'Layout content'}</div></Layout>, {lifecycleExperimental: true})).toMatchSnapshot();
    });
});
