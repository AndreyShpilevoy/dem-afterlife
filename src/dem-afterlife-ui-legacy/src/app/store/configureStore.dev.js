/* eslint import/no-extraneous-dependencies: 'off' */

import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {root} from 'utils';
import {routerMiddleware as createRouterMiddleware} from 'react-router-redux';
import crashReporter from '../middlewares/crashReporterMiddleware';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export default function configureStore(history) {
    const routerMiddleware = createRouterMiddleware(history);
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        root.devToolsExtension && root.devToolsExtension(),
        applyMiddleware(
            sagaMiddleware,
            routerMiddleware,
            crashReporter,
            reduxImmutableStateInvariant()
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
}
