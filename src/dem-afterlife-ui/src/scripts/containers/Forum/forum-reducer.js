import {all, call, put, take, fork} from 'redux-saga/effects';
import {getTopicArrayByForumIdApi} from 'api';
import {getSubForumArrayByParentForumIdArray} from 'containers/shared-reducer';

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

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression*/
/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getSubForumsByParentForumIdArrayNonBlockSaga(forumId) {
    const topicArray = yield call(getTopicArrayByForumIdApi, forumId);
    yield put(getTopicArrayByForumIdSuccess(topicArray));
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getSubForumsByParentForumIdArraySaga() {
    while (true) {
        const {payload} = yield take(GET_TOPIC_ARRAY_BY_FORUM_ID);
        yield fork(getSubForumsByParentForumIdArrayNonBlockSaga, payload.forumId);
        yield put(getSubForumArrayByParentForumIdArray([payload.forumId]));
    }
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* forumSaga() {
    yield all([
        getSubForumsByParentForumIdArraySaga()
    ]);
}

/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression*/