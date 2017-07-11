import {all, call, put, take, fork} from 'redux-saga/effects';
import {getPostArrayByTopicIdApi, getUserArrayByUserIdArrayApi} from 'api';

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

// export const getTopicArrayByForumIdSuccess = topicArray => ({
//     type: GET_POST_ARRAY_BY_TOPIC_ID_SUCCESS,
//     payload: {topicArray}
// });

export const topicReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_POST_ARRAY_BY_TOPIC_ID_SUCCESS:
            return {...state, postArray: payload.postArray};
        default:
            break;
    }
    return state;
};

// /* eslint-disable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression*/
// /* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
// export function* getTopicArrayForumIdNonBlockSaga(forumId) {
//     const topicArray = yield call(getTopicArrayByForumIdApi, forumId);
//     yield put(getTopicArrayByForumIdSuccess(topicArray));
// }

// /* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
// export function* getTopicArrayForumIdSaga() {
//     while (true) {
//         const {payload} = yield take(GET_POST_ARRAY_BY_TOPIC_ID);
//         yield fork(getTopicArrayForumIdNonBlockSaga, payload.forumId);
//         yield put(getSubForumArrayByParentForumIdArray([payload.forumId]));
//     }
// }

// /* istanbul ignore next: ignore generator in test coverage - incorrect behaviour*/
// export function* forumSaga() {
//     yield all([
//         getTopicArrayForumIdSaga()
//     ]);
// }

// /* eslint-enable func-style, fp/no-nil, fp/no-loops, fp/no-unused-expression*/