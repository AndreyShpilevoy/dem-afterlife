/* eslint no-undef: "off" */
import delay from 'api/__fakeApi__/delay';
import chapterArray from 'api/__fakeData__/chapterArray';

const getChapterArrayApi = () => new Promise(resolve => {
    setTimeout(() => {
        resolve({response: chapterArray, error: null});
    }, delay);
});

export default getChapterArrayApi;