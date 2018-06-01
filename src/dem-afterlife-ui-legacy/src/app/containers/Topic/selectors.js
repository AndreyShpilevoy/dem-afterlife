import {createSelector} from 'reselect';
import {sort} from 'ramda';

export const postArraySelector = state => state.topicReducer.postArray;
export const userArraySelector = state => state.topicReducer.userArray;

export const postArrayWithMappedUserSelector = createSelector(
    postArraySelector,
    userArraySelector,
    (postArray, userArray) => {
        if (userArray) {
            return postArray.reduce((previous, current) => {
                const user = userArray.find(x => x.id === current.userId);
                if (current.editInfo) {
                    return [
                        ...previous,
                        {...current, user, editInfo: {...current.editInfo, user: userArray.find(x => x.id === current.editInfo.userId)} }
                    ];
                }
                return [...previous, {...current, user}];
            }, []);
        }
        return postArray;
    }
);

export const sortedPostArrayWithUsersSelector = createSelector(
    postArrayWithMappedUserSelector,
    postArray => sort((first, second) => first.postTime.getTime() - second.postTime.getTime(), postArray)
);