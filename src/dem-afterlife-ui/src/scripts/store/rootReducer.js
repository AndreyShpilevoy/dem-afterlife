import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { layoutReducer } from 'containers/Layout/layout-reducer';
import { notificationReducer } from 'containers/Notification/notification-reducer';

const rootReducer = combineReducers({
    layoutReducer,
    notificationReducer,
    routing: routerReducer
});

export default rootReducer;
