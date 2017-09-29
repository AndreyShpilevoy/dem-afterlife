import {all, call, put, take, fork} from 'redux-saga/effects';
import {getTopicArrayByForumIdApi} from 'api';
import {getForumArrayByParentForumId} from 'containers/reducer';

const initialState = {
    topicArray: []
};

export const GET_TOPIC_ARRAY_BY_FORUM_ID = 'GET_TOPIC_ARRAY_BY_FORUM_ID';
export const getTopicArrayByForumId = forumId => ({
    type: GET_TOPIC_ARRAY_BY_FORUM_ID,
    payload: {forumId}
});

export const GET_TOPIC_ARRAY_BY_FORUM_ID_SUCCESS = 'GET_TOPIC_ARRAY_BY_FORUM_ID_SUCCESS';
export const getTopicArrayByForumIdSuccess = topicArray => ({
    type: GET_TOPIC_ARRAY_BY_FORUM_ID_SUCCESS,
    payload: {topicArray}
});

export const forumReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_TOPIC_ARRAY_BY_FORUM_ID_SUCCESS:
            return {...state, topicArray: payload.topicArray};
        default:
            break;
    }
    return state;
};

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression, func-names */
export const getTopicArrayForumIdNonBlockSaga = function* (forumId) {
    const topicArray = yield call(getTopicArrayByForumIdApi, forumId);
    yield put(getTopicArrayByForumIdSuccess(topicArray));
};

export const getTopicArrayForumIdSaga = function* () {
    for (;;) {
        const {payload} = yield take(GET_TOPIC_ARRAY_BY_FORUM_ID);
        yield fork(getTopicArrayForumIdNonBlockSaga, payload.forumId);
        yield put(getForumArrayByParentForumId(payload.forumId));
    }
};

export const forumSaga = function* () {
    yield all([
        getTopicArrayForumIdSaga()
    ]);
};

/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression */