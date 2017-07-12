/* eslint no-undef: "off", complexity: 0 */

import delay from 'api/__fakeApi__/delay';
import forumArray from 'api/__fakeData__/forumArray';

const getForumArrayByChapterIdArrayApi = chapterIdArray => {
    const result = chapterIdArray.reduce((previous, current) =>
        [...previous, ...forumArray.filter(x => x.chapterId === current)], []);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(result);
        }, delay);
    });
};

export default getForumArrayByChapterIdArrayApi;