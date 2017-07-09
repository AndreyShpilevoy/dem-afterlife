import {all, call, put, take, fork} from 'redux-saga/effects';
import {getTopicArrayByForumIdApi} from 'api';
import {getForumArrayByParentForumIdArray} from 'containers/shared-reducer';
import {mergeTwoArrayOfObjectsMatchingById} from 'utils';

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
            return {...state, topicArray: mergeTwoArrayOfObjectsMatchingById(state.topicArray, payload.topicArray)};
        default:
            break;
    }
    return state;
};

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression*/
/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getForumsByParentForumIdArrayNonBlockSaga(forumId) {
    const topicArray = yield call(getTopicArrayByForumIdApi, forumId);
    yield put(getTopicArrayByForumIdSuccess(topicArray));
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* getForumsByParentForumIdArraySaga() {
    while (true) {
        const {payload} = yield take(GET_TOPIC_ARRAY_BY_FORUM_ID);
        yield fork(getForumsByParentForumIdArrayNonBlockSaga, payload.forumId);
        yield put(getForumArrayByParentForumIdArray([payload.forumId]));
    }
}

/* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
export function* forumSaga() {
    yield all([
        getForumsByParentForumIdArraySaga()
    ]);
}

/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression*/