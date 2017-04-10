import R from 'ramda';

const initialState = {
    notifications: []
};

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const addNotification = (notification, level) => (
    {
        type: ADD_NOTIFICATION,
        payload: {
            notification: {...notification, level, uid: notification.uid || Date.now()}
        }
    }
);

export const addInfoNotification = notification => addNotification(notification, 'info');
export const addSuccessNotification = notification => addNotification(notification, 'success');
export const addWarningNotification = notification => addNotification(notification, 'warning');
export const addExceptionNotification = notification => addNotification(notification, 'error');

export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
export const removeNotification = uid => (
    {
        type: REMOVE_NOTIFICATION,
        payload: {uid}
    }
);

export const notificationReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_NOTIFICATION:
            return {...state, notifications: [...state.notifications, payload.notification] };

        case REMOVE_NOTIFICATION:
            return {notifications: R.filter(n => n.uid !== payload.uid, state.notifications)};
        default:
            break;
    }
    return state;
};
