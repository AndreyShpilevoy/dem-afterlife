/* eslint no-undef: "off" */
import delay from 'api/__fakeApi__/delay';
import navigationLinkArray from 'api/__fakeData__/navigationLinkArray';

const getNavigationLinkArrayApi = () => new Promise(resolve => {
    setTimeout(() => {
        resolve({response: {data: navigationLinkArray}, error: null});
    }, delay);
});

export default getNavigationLinkArrayApi;