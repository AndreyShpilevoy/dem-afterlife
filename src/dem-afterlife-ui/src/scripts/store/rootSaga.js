import {getLocaleSaga, getNavigationLinkArraySaga} from 'containers/Layout/layout-reducer';

export default function* root() {
    yield [
        getLocaleSaga(),
        getNavigationLinkArraySaga()
    ];
}
