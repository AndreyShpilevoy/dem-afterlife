import {getLocaleSaga} from 'containers/Layout/layout-reducer';

export default function* root() {
    yield [
        getLocaleSaga()
    ];
}
