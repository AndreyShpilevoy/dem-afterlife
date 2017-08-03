import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import root from 'lodash._root';
import R from 'ramda';
import sharedPropTypes from './sharedPropTypes';
import localization from './localization';

const createMediaQueryMin = (mediaMinString, model) => ({
    [`@media (${mediaMinString})`]: model
});
const createMediaQueryMax = (mediaMaxString, model) => ({
    [`@media (${mediaMaxString})`]: model
});
const createMediaQueryMinMax = (mediaMinString, mediaMaxString, model) => ({
    [`@media (${mediaMinString}) and (${mediaMaxString})`]: model
});

const mergeTwoArraysOfObjectMatchById = (firstArray, secondArray) =>
    secondArray.reduce((previous, current) =>
        [...previous.filter(x => x.id !== current.id), current], firstArray);

const sortObjectArrayByOrderProperty = R.sortBy(R.prop('order'));

const stringIsLink = string => {
    if (!string || typeof string !== 'string') { return false; }

    const regex = /^(https?|ftp):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|]$/i;
    return regex.test(string.trim());
};

const stringIsEmail = string => {
    if (!string || typeof string !== 'string') { return false; }

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    return regex.test(string.trim());
};

export {root};
export {debounce};
export {throttle};
export {createMediaQueryMin};
export {createMediaQueryMax};
export {createMediaQueryMinMax};
export {sharedPropTypes};
export {localization};
export {mergeTwoArraysOfObjectMatchById};
export {sortObjectArrayByOrderProperty};
export {stringIsLink};
export {stringIsEmail};