import {all, call, put, take, fork} from 'redux-saga/effects';
import {getPostArrayByTopicIdApi, getUserArrayByUserIdArrayApi} from 'api';
import {margeHelper} from 'utils';

const initialState = {
    postArray: [],
    userArray: []
};

export const GET_POST_ARRAY_BY_TOPIC_ID = 'GET_POST_ARRAY_BY_TOPIC_ID';
export const getPostArrayByTopicId = topicId => ({
    type: GET_POST_ARRAY_BY_TOPIC_ID,
    payload: {topicId}
});

export const GET_POST_ARRAY_BY_TOPIC_ID_SUCCESS = 'GET_POST_ARRAY_BY_TOPIC_ID_SUCCESS';
export const getPostArrayByTopicIdSuccess = postArray => ({
    type: GET_POST_ARRAY_BY_TOPIC_ID_SUCCESS,
    payload: {postArray}
});

export const GET_USER_ARRAY_BY_USER_ID_ARRAY = 'GET_USER_ARRAY_BY_USER_ID_ARRAY';
export const getUserArrayByUserIdArray = userIdArray => ({
    type: GET_USER_ARRAY_BY_USER_ID_ARRAY,
    payload: {userIdArray}
});

export const GET_USER_ARRAY_BY_USER_ID_ARRAY_SUCCESS = 'GET_USER_ARRAY_BY_USER_ID_ARRAY_SUCCESS';
export const getUserArrayByUserIdArraySuccess = userArray => ({
    type: GET_USER_ARRAY_BY_USER_ID_ARRAY_SUCCESS,
    payload: {userArray}
});

export const topicReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_POST_ARRAY_BY_TOPIC_ID_SUCCESS:
            return {...state, postArray: payload.postArray};
        case GET_USER_ARRAY_BY_USER_ID_ARRAY_SUCCESS:
            return {...state, userArray: margeHelper.mergeTwoArraysOfObjectMatchById(state.userArray, payload.userArray)};
        default:
            break;
    }
    return state;
};

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression */
export function* getUserArrayByUserIdArraySaga() {
    for (;;) {
        const {payload} = yield take(GET_USER_ARRAY_BY_USER_ID_ARRAY);
        const userArray = yield call(getUserArrayByUserIdArrayApi, payload.userIdArray);
        yield put(getUserArrayByUserIdArraySuccess(userArray));
    }
}

export function* getPostArrayByTopicIdNonBlockSaga(topicId) {
    const postArray = yield call(getPostArrayByTopicIdApi, topicId);
    yield put(getPostArrayByTopicIdSuccess(postArray));
    const userIdArray = postArray.map(x => x.userId);
    yield put(getUserArrayByUserIdArray(userIdArray));
}

export function* getPostArrayByTopicIdSaga() {
    for (;;) {
        const {payload} = yield take(GET_POST_ARRAY_BY_TOPIC_ID);
        yield fork(getPostArrayByTopicIdNonBlockSaga, payload.topicId);
    }
}

export function* topicSaga() {
    yield all([
        getPostArrayByTopicIdSaga(),
        getUserArrayByUserIdArraySaga()
    ]);
}
/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression */