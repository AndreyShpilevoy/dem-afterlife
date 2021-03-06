import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {layoutReducer} from 'containers/Layout/reducer';
import {conferenceReducer} from 'containers/Conference/reducer';
import {forumReducer} from 'containers/Forum/reducer';
import {topicReducer} from 'containers/Topic/reducer';
import {sharedReducer} from 'containers/reducer';

const rootReducer = combineReducers({
    layoutReducer,
    conferenceReducer,
    forumReducer,
    topicReducer,
    sharedReducer,
    routing: routerReducer
});

export default rootReducer;
