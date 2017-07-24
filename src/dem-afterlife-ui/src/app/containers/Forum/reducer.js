import {all, call, put, take, fork} from 'redux-saga/effects';
import {getTopicArrayByForumIdApi} from 'api';
import {getSubForumArrayByParentForumIdArray} from 'containers/reducer';

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

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression */
export function* getTopicArrayForumIdNonBlockSaga(forumId) {
    const topicArray = yield call(getTopicArrayByForumIdApi, forumId);
    yield put(getTopicArrayByForumIdSuccess(topicArray));
}

export function* getTopicArrayForumIdSaga() {
    for (;;) {
        const {payload} = yield take(GET_TOPIC_ARRAY_BY_FORUM_ID);
        yield fork(getTopicArrayForumIdNonBlockSaga, payload.forumId);
        yield put(getSubForumArrayByParentForumIdArray([payload.forumId]));
    }
}

export function* forumSaga() {
    yield all([
        getTopicArrayForumIdSaga()
    ]);
}

/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression */