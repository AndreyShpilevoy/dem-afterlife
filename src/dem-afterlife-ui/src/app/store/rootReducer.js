import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {layoutReducer} from 'containers/Layout/reducer';
import {notificationReducer} from 'containers/Notification/reducer';
import {conferenceReducer} from 'containers/Conference/reducer';
import {forumReducer} from 'containers/Forum/reducer';
import {sharedReducer} from 'containers/reducer';

const rootReducer = combineReducers({
    layoutReducer,
    conferenceReducer,
    forumReducer,
    sharedReducer,
    notificationReducer,
    routing: routerReducer
});

export default rootReducer;
