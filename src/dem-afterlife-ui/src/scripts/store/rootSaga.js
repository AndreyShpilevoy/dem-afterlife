import {all} from 'redux-saga/effects';
import {layoutSaga} from 'containers/Layout/layout-reducer';

export default function* root() {
    yield all([
        layoutSaga()
    ]);
}
