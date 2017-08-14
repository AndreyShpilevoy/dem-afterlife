const initialState = {
    breadcrumbArray: []
};

export const SET_BREADCRUMBS = 'SET_BREADCRUMBS';
export const setBreadcrumbs = breadcrumbs => ({
    type: SET_BREADCRUMBS,
    payload: {breadcrumbs}
});

export const breadcrumbReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_BREADCRUMBS:
            return {...state, breadcrumbArray: payload.breadcrumbs};
        default:
            break;
    }
    return state;
};