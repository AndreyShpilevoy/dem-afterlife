/* eslint no-undef: "off" */
import delay from 'api/__fakeApi__/delay';
import navigationLinkArray from 'api/__fakeData__/navigationLinkArray';

const getNavigationLinkArrayApi = () => new Promise(resolve => {
    setTimeout(() => {
        resolve(navigationLinkArray);
    }, delay);
});

export default getNavigationLinkArrayApi;