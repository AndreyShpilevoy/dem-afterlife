import debounce from "lodash.debounce";
import throttle from "lodash.throttle";
import root from "lodash._root";
import { sortBy, prop } from "ramda";
import sharedPropTypes from "./sharedPropTypes";
import localization from "./localization";

export const createMediaQueryMin = (mediaMinString, model) => ({
  [`@media (${mediaMinString})`]: model
});
export const createMediaQueryMax = (mediaMaxString, model) => ({
  [`@media (${mediaMaxString})`]: model
});
export const createMediaQueryMinMax = (
  mediaMinString,
  mediaMaxString,
  model
) => ({
  [`@media (${mediaMinString}) and (${mediaMaxString})`]: model
});

export const mergeTwoArraysOfObjectMatchById = (firstArray, secondArray) =>
  secondArray.reduce(
    (previous, current) => [
      ...previous.filter(x => x.id !== current.id),
      current
    ],
    firstArray
  );

export const sortObjectArrayByOrderProperty = sortBy(prop("order"));

export const stringIsLink = string => {
  if (!string || typeof string !== "string") {
    return false;
  }

  const regex = /^(https?|ftp):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|]$/i;
  return regex.test(string.trim());
};

export const stringIsEmail = string => {
  if (!string || typeof string !== "string") {
    return false;
  }

  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
  return regex.test(string.trim());
};

export const handleEnterKeyDown = event => event.key === "Enter";

export { root };
export { debounce };
export { throttle };
export { sharedPropTypes };
export { localization };
