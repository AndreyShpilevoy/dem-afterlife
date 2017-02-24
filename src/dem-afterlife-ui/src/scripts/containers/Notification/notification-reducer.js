const initialState = {
    notifications: []
};

export const addInfoNotification = (notification) => (addNotification(notification, 'info'));
export const addSuccessNotification = (notification) => (addNotification(notification, 'success'));
export const addWarningNotification = (notification) => (addNotification(notification, 'warning'));
export const addExceptionNotification = (notification) => (addNotification(notification, 'error'));

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const addNotification = (notification, level) => (
    {
        type: ADD_NOTIFICATION,
        payload: {
            notification: { ...notification, level, uid: notification.uid || Date.now() }
        }
    }
);

export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
export const removeNotification = (uid) => (
    {
        type: REMOVE_NOTIFICATION,
        payload: { uid }
    }
);

export const notificationReducer = (state = initialState, {type, payload}) => {
    let localState = state;
    switch (type) {
        case ADD_NOTIFICATION:
            localState = { ...state, notifications: [...localState.notifications, payload.notification] };
            break;

        case REMOVE_NOTIFICATION:
            localState = {
                notifications: localState.notifications
                    .filter(notification => (notification.uid !== payload.uid))
            };
            break;
    }
    return localState;
};
