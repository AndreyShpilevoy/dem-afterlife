import {createSelector} from 'reselect';
import {sortObjectArrayByOrderProperty} from 'utils';

export const breadcrumbArraySelector = state => state.breadcrumbReducer.breadcrumbArray;

export const sortedBreadcrumbArraySelector = createSelector(
    breadcrumbArraySelector,
    breadcrumbArray => sortObjectArrayByOrderProperty(breadcrumbArray)
);

export const breadcrumbConferenceArray = () => [
    {
        path: '/Conference',
        title: 'Conference',
        order: 1
    }
];