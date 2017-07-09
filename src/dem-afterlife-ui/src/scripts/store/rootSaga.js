import {all} from 'redux-saga/effects';
import {layoutSaga} from 'containers/Layout/layout-reducer';
import {conferenceSaga} from 'containers/Conference/conference-reducer';
import {forumSaga} from 'containers/Forum/forum-reducer';
import {sharedSaga} from 'containers/shared-reducer';

export default function* root() {
    yield all([
        layoutSaga(),
        conferenceSaga(),
        forumSaga(),
        sharedSaga()
    ]);
}
