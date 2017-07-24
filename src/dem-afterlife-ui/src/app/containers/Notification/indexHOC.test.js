/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation:0, react/jsx-filename-extension:0 */

import React from 'react';
import {shallow} from 'enzyme';
import * as ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import configureMockStore from 'redux-mock-store';
import Notification from './index';

ThemedStyleSheet.default.get = () => {};

describe('Notification HOC', () => {
    const mockStore = configureMockStore();

    it('component match expected snapshot', () => {
        const props = {store: mockStore({notificationReducer: {notifications: [] } })};
        expect(shallow(<Notification {...props} />, {lifecycleExperimental: true})).toMatchSnapshot();
    });
});
