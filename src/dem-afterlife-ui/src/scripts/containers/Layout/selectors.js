import {createSelector} from 'reselect';
import R from 'ramda';

export const navigationLinkArraySelector = state => state.layoutReducer.navigationLinkArray;
export const socialMediaLinkArraySelector = state => state.layoutReducer.socialMediaLinkArray;

export const sortedNavigationLinkSelector = createSelector(
    navigationLinkArraySelector,
    navigationLinkArray => R.sortBy(R.prop('order'), navigationLinkArray)
);

export const sortedSocialMediaLinkSelector = createSelector(
    socialMediaLinkArraySelector,
    socialMediaLinkArray => R.sortBy(R.prop('order'), socialMediaLinkArray)
);