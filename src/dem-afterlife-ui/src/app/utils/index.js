import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import root from 'lodash._root';
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

const defaults = {
    emptyObject: {},
    emptyArray: [],
    emptyString: '',
    spaceWidth: '0.25rem',
    spaceString: ' '
};

const mergeTwoArraysOfObjectMatchById = (firstArray, secondArray) =>
     secondArray.reduce((previous, current) =>
         [...previous.filter(x => x.id !== current.id), current], firstArray);

const margeHelper = {
    mergeTwoArraysOfObjectMatchById
};

export {root};
export {debounce};
export {throttle};
export {createMediaQueryMin};
export {createMediaQueryMax};
export {createMediaQueryMinMax};
export {defaults};
export {sharedPropTypes};
export {localization};
export {margeHelper};