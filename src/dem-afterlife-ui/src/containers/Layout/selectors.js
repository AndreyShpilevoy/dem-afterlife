import { createSelector } from "reselect";
import { sortObjectArrayByOrderProperty } from "utils";

export const navigationLinkArraySelector = state =>
  state.layoutReducer.navigationLinkArray;
export const socialMediaLinkArraySelector = state =>
  state.layoutReducer.socialMediaLinkArray;

export const sortedNavigationLinkSelector = createSelector(
  navigationLinkArraySelector,
  navigationLinkArray => sortObjectArrayByOrderProperty(navigationLinkArray)
);

export const sortedSocialMediaLinkSelector = createSelector(
  socialMediaLinkArraySelector,
  socialMediaLinkArray => sortObjectArrayByOrderProperty(socialMediaLinkArray)
);
