/* eslint-disable no-undef, complexity, no-unused-vars */

import delay from 'api/__fakeApi__/delay';
import postArray from 'api/__fakeData__/postArray';

const getPostArrayByTopicIdApi = ({topicId, pageNumber, pageSize}) =>
    new Promise(resolve => {
        const skip = pageNumber > 0 ? pageSize * (pageNumber - 1) : 0;
        const oDataParams = `?$top=${pageSize}&$skip=${skip}`;
        console.log(oDataParams);
        setTimeout(() => {
            resolve({response: {data: postArray, totalItemsCount: 400}, error: null});
        }, delay);
    });

export default getPostArrayByTopicIdApi;
