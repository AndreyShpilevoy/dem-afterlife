import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import crashReporter from '../middlewares/crashReporterMiddleware';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';


export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        applyMiddleware(
            crashReporter,
            sagaMiddleware
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
}
