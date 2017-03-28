import debounce from 'lodash.debounce';
import throttle from 'lodash.throttle';
import root from 'lodash._root';

export { root };
export { debounce };
export { throttle };
//export const compose = (...fns) => fns.reduce((previous, current) => (...args) => previous(current(...args)));
//export const merge = (...elements) => elements.reduce((previous, current) => ({...previous, ...current}));