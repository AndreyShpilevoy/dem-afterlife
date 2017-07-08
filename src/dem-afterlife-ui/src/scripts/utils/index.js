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

const defaults = {
    emptyObject: {},
    emptyArray: [],
    emptyString: '',
    spaceWidth: '0.25rem',
    spaceString: ' '
};

const addObjectToArrayMatchingById = (firstArray, newObject) =>
        [...firstArray.filter(x => x.id !== newObject.id), newObject];
const curriedAddObjectToArrayMatchingById = R.curry(addObjectToArrayMatchingById);

const mergeTwoArrayOfObjectsMatchingById = (firstArray, secondArray) =>
    secondArray.reduce((previous, current) =>
        [...previous.filter(x => x.id !== current.id), current], firstArray);
const curriedMergeTwoArrayOfObjectsMatchingById = R.curry(mergeTwoArrayOfObjectsMatchingById);

export {root};
export {debounce};
export {throttle};
export {createMediaQueryMin};
export {createMediaQueryMax};
export {createMediaQueryMinMax};
export {defaults};
export {sharedPropTypes};
export {localization};
export {addObjectToArrayMatchingById};
export {curriedAddObjectToArrayMatchingById};
export {mergeTwoArrayOfObjectsMatchingById};
export {curriedMergeTwoArrayOfObjectsMatchingById};