/* eslint no-undef: 0, fp/no-unused-expression: 0, fp/no-nil: 0, fp/no-mutation: 0*/

import {
    notificationReducer,
    addNotification,
    addInfoNotification,
    addSuccessNotification,
    addWarningNotification,
    addExceptionNotification,
    removeNotification,
    ADD_NOTIFICATION,
    REMOVE_NOTIFICATION
} from './notification-reducer';

Date.now = jest.genMockFunction().mockReturnValue(1492003118322);

describe('Notification reducer', () => {
    it('addNotification should create expected object', () => {
        const notification = {
            message: 'message',
            title: 'title',
            autoDismiss: 5
        };
        const expectedResult = {
            type: 'ADD_NOTIFICATION',
            payload: {
                notification: {
                    message: 'message',
                    title: 'title',
                    autoDismiss: 5,
                    level: 'info',
                    uid: 1492003118322} } };
        expect(addNotification(notification, 'info')).toEqual(expectedResult);
    });

    it('addInfoNotification should create expected object', () => {
        const notification = {
            message: 'message',
            title: 'title',
            autoDismiss: 5
        };
        const expectedResult = {
            type: 'ADD_NOTIFICATION',
            payload: {
                notification: {
                    message: 'message',
                    title: 'title',
                    autoDismiss: 5,
                    level: 'info',
                    uid: 1492003118322} } };
        expect(addInfoNotification(notification)).toEqual(expectedResult);
    });

    it('addSuccessNotification should create expected object', () => {
        const notification = {
            message: 'message',
            title: 'title',
            autoDismiss: 5
        };
        const expectedResult = {
            type: 'ADD_NOTIFICATION',
            payload: {
                notification: {
                    message: 'message',
                    title: 'title',
                    autoDismiss: 5,
                    level: 'success',
                    uid: 1492003118322} } };
        expect(addSuccessNotification(notification)).toEqual(expectedResult);
    });

    it('addWarningNotification should create expected object', () => {
        const notification = {
            message: 'message',
            title: 'title',
            autoDismiss: 5
        };
        const expectedResult = {
            type: 'ADD_NOTIFICATION',
            payload: {
                notification: {
                    message: 'message',
                    title: 'title',
                    autoDismiss: 5,
                    level: 'warning',
                    uid: 1492003118322} } };
        expect(addWarningNotification(notification)).toEqual(expectedResult);
    });

    it('addExceptionNotification should create expected object', () => {
        const notification = {
            message: 'message',
            title: 'title',
            autoDismiss: 5
        };
        const expectedResult = {
            type: 'ADD_NOTIFICATION',
            payload: {
                notification: {
                    message: 'message',
                    title: 'title',
                    autoDismiss: 5,
                    level: 'error',
                    uid: 1492003118322} } };
        expect(addExceptionNotification(notification)).toEqual(expectedResult);
    });

    it('removeNotification should create expected object', () => {
        const expectedResult = {
            type: 'REMOVE_NOTIFICATION',
            payload: {uid: 1492003118322}
        };
        expect(removeNotification(1492003118322)).toEqual(expectedResult);
    });

    it('notificationReducer with action ADD_NOTIFICATION should return expected state', () => {
        const defaulState = {
            notifications: []
        };
        const action = {
            type: ADD_NOTIFICATION,
            payload: {
                notification: {
                    message: 'message',
                    title: 'title',
                    autoDismiss: 5,
                    level: 'info',
                    uid: 1492003118322} }
        };
        const expectedResult = {
            notifications: [{
                autoDismiss: 5,
                level: 'info',
                message: 'message',
                title: 'title',
                uid: 1492003118322
            }] };
        expect(notificationReducer(defaulState, action)).toEqual(expectedResult);
    });

    it('notificationReducer with action REMOVE_NOTIFICATION should return expected state', () => {
        const defaulState = {
            notifications: [{
                autoDismiss: 5,
                level: 'info',
                message: 'message',
                title: 'title',
                uid: 1492003118322
            }] };
        const action = {
            type: REMOVE_NOTIFICATION,
            payload: {uid: 1492003118322}
        };
        const expectedResult = {
            notifications: []
        };
        expect(notificationReducer(defaulState, action)).toEqual(expectedResult);
    });

    it('notificationReducer with invald action should return expected state', () => {
        const defaulState = {
            notifications: [{
                autoDismiss: 5,
                level: 'info',
                message: 'message',
                title: 'title',
                uid: 1492003118322
            }] };
        const action = {
            type: 'wrong',
            payload: {}
        };
        const expectedResult = {
            notifications: [{
                autoDismiss: 5,
                level: 'info',
                message: 'message',
                title: 'title',
                uid: 1492003118322
            }] };
        expect(notificationReducer(defaulState, action)).toEqual(expectedResult);
    });
});
