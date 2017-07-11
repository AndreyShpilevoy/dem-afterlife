import {all} from 'redux-saga/effects';
import {layoutSaga} from 'containers/Layout/reducer';
import {conferenceSaga} from 'containers/Conference/reducer';
import {forumSaga} from 'containers/Forum/reducer';
import {sharedSaga} from 'containers/reducer';

export default function* root() {
    yield all([
        layoutSaga(),
        conferenceSaga(),
        forumSaga(),
        sharedSaga()
    ]);
}
