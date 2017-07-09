import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {layoutReducer} from 'containers/Layout/layout-reducer';
import {notificationReducer} from 'containers/Notification/notification-reducer';
import {conferenceReducer} from 'containers/Conference/conference-reducer';
import {sharedReducer} from 'containers/shared-reducer';

const rootReducer = combineReducers({
    layoutReducer,
    conferenceReducer,
    sharedReducer,
    notificationReducer,
    routing: routerReducer
});

export default rootReducer;
