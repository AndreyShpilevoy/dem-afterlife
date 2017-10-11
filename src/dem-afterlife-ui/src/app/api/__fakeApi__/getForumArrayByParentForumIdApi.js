/* eslint no-undef: "off", complexity: 0 */

import delay from 'api/__fakeApi__/delay';
import forumArray from 'api/__fakeData__/forumArray';

const getForumArrayByParentForumIdApi = parentForumId => {
    const result = forumArray.filter(x => x.parentForumId === parentForumId);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({response: result, error: null});
        }, delay);
    });
};

export default getForumArrayByParentForumIdApi;
