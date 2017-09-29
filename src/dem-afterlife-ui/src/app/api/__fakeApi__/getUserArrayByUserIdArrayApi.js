/* eslint no-undef: "off", complexity: 0 */

import delay from 'api/__fakeApi__/delay';
import userArray from 'api/__fakeData__/userArray';

const getUserArrayByUserIdArrayApi = userIdArray => {
    const result = userIdArray.reduce((previous, current) =>
        [...previous, ...userArray.filter(x => x.id === current)], []);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({response: result, error: null});
        }, delay);
    });
};

export default getUserArrayByUserIdArrayApi;
