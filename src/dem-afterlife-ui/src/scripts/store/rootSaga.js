import {layoutSaga} from 'containers/Layout/layout-reducer';

export default function* root() {
    yield [
        layoutSaga()
    ];
}
