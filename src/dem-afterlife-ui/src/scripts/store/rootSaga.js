import {all} from 'redux-saga/effects';
import {layoutSaga} from 'containers/Layout/layout-reducer';
import {conferenceSaga} from 'containers/Conference/conference-reducer';
import {containersSaga} from 'containers/containers-reducer';

export default function* root() {
    yield all([
        layoutSaga(),
        conferenceSaga(),
        containersSaga()
    ]);
}
