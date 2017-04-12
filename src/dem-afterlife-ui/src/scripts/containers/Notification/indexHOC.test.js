/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {shallow} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Notification from './index';

describe('Notification HOC', () => {
    const mockStore = configureMockStore();

    it('component match expected snapshot', () => {
        const props = {store: mockStore({notificationReducer: {allNotifications: [] } })};
        expect(shallow(<Notification {...props}/>, {lifecycleExperimental: true})).toMatchSnapshot();
    });
});
