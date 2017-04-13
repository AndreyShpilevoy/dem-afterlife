/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0*/

import React from 'react';
import {mount} from 'enzyme';
import {NotificationPure} from './index';

jest.mock('styles/styler');

describe('Notification Pure', () => {
    it('component without notifications match expected snapshot', () => {
        expect(mount(<NotificationPure/>, {lifecycleExperimental: true})).toMatchSnapshot();
    });

    it('component with 2 notifications match expected snapshot', () => {
        const wrapper = mount(<NotificationPure/>, {lifecycleExperimental: true});
        wrapper.setProps({
            notifications: [{
                message: 'message',
                title: 'title',
                level: 'info',
                autoDismiss: 5,
                uid: 1
            },
            {
                message: 'message',
                title: 'title',
                level: 'warning',
                autoDismiss: 5,
                uid: 2
            }]
        });
        expect(wrapper).toMatchSnapshot();
    });
});