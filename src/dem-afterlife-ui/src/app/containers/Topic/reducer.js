import {all, call, put, take, fork} from 'redux-saga/effects';
import {getPostArrayByTopicIdApi, getUserArrayByUserIdArrayApi} from 'api';
import {mergeTwoArraysOfObjectMatchById} from 'utils';
import {setPaginationTotalItemsCount} from 'containers/reducer';

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
            return {...state, userArray: mergeTwoArraysOfObjectMatchById(state.userArray, payload.userArray)};
        default:
            break;
    }
    return state;
};

/* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression, func-names */
export const getUserArrayByUserIdArrayNonBlockSaga = function* (userIdArray) {
    const {response, error} = yield call(getUserArrayByUserIdArrayApi, userIdArray);
    if (response) {
        yield put(getUserArrayByUserIdArraySuccess(response.data));
    } else {
        yield put({type: 'PRODUCTS_REQUEST_FAILED', error});
    }
};

export const getUserArrayByUserIdArraySaga = function* () {
    for (;;) {
        const {payload} = yield take(GET_USER_ARRAY_BY_USER_ID_ARRAY);
        yield fork(getUserArrayByUserIdArrayNonBlockSaga, payload.userIdArray);
    }
};

export const getPostArrayByTopicIdNonBlockSaga = function* (topicId) {
    const {response, error} = yield call(getPostArrayByTopicIdApi, topicId); // TODO: pass params for oData pagination, from url and store
    if (response) {
        const {data, totalItemsCount} = response;
        yield put(getPostArrayByTopicIdSuccess(data));
        yield put(setPaginationTotalItemsCount(totalItemsCount));
        const userIdArray = data.map(x => x.userId);
        yield put(getUserArrayByUserIdArray(userIdArray));
    } else {
        yield put({type: 'PRODUCTS_REQUEST_FAILED', error});
    }
};

export const getPostArrayByTopicIdSaga = function* () {
    for (;;) {
        const {payload} = yield take(GET_POST_ARRAY_BY_TOPIC_ID);
        yield fork(getPostArrayByTopicIdNonBlockSaga, payload.topicId);
    }
};

export const topicSaga = function* () {
    yield all([
        getPostArrayByTopicIdSaga(),
        getUserArrayByUserIdArraySaga()
    ]);
};
/* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression */