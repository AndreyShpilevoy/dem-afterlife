/* eslint no-undef: "off", complexity: 0 */

import delay from 'api/__fakeApi__/delay';
import forums from 'api/__fakeData__/forumArray';

const getForumArrayByChapterIdArrayApi = chapterIdArray => {
    const result = [];
    chapterIdArray.forEach(chapterId => {
        switch (chapterId) {
            case 1:
            case 10:
            case 11:
            case 12:
                result.push({...forums[0], ...{chapterId} });
                result.push({...forums[1], ...{chapterId} });
                break;
            case 2:
            case 20:
                result.push({...forums[1], ...{chapterId} });
                result.push({...forums[0], ...{chapterId} });
                break;
            case 3:
            case 30:
            case 31:
                result.push({...forums[1], ...{chapterId} });
                break;
            case 4:
            case 40:
                result.push({...forums[0], ...{chapterId} });
                result.push({...forums[1], ...{chapterId} });
                result.push({...forums[2], ...{chapterId} });
                result.push({...forums[3], ...{chapterId} });
                break;
            case 5:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
                result.push({...forums[0], ...{chapterId} });
                result.push({...forums[1], ...{chapterId} });
                result.push({...forums[4], ...{chapterId} });
                break;
            default:
        }
    }, this);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Object.assign([], result));
        }, delay);
    });
};

export default getForumArrayByChapterIdArrayApi;
