/* eslint no-undef: "off" */
import delay from 'api/__fakeApi__/delay';
import socialMediaLinkArray from 'api/__fakeData__/socialMediaLinkArray';

const getSocialMediaLinkArrayApi = () => new Promise(resolve => {
    setTimeout(() => {
        resolve({response: {data: socialMediaLinkArray}, error: null});
    }, delay);
});

export default getSocialMediaLinkArrayApi;