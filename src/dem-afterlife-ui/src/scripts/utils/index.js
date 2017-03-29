import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import root from 'lodash._root';

const createMediaQueryMin = (mediaMinString, model) => ({
    [`@media (${mediaMinString})`]: model
});
const createMediaQueryMax = (mediaMaxString, model) => ({
    [`@media (${mediaMaxString})`]: model
});
const createMediaQueryMinMax = (mediaMinString, mediaMaxString, model) => ({
    [`@media (${mediaMinString}) and (${mediaMaxString})`]: model
});

export {root};
export {debounce};
export {throttle};
export {createMediaQueryMin};
export {createMediaQueryMax};
export {createMediaQueryMinMax};