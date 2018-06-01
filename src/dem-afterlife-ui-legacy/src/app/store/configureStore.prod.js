import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {routerMiddleware as createRouterMiddleware} from 'react-router-redux';
import crashReporter from '../middlewares/crashReporterMiddleware';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';


export default function configureStore(history) {
    const routerMiddleware = createRouterMiddleware(history);
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        applyMiddleware(
            crashReporter,
            routerMiddleware,
            sagaMiddleware
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
}
