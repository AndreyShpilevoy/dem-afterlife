import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {root} from 'utils';
import JssProvider from 'styles/JssProvider';
import configureStore from './store/configureStore';
import routes from './routes';

const history = createHistory();
const store = configureStore()(history);

render(
    <JssProvider>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                {routes}
            </ConnectedRouter>
        </Provider>
    </JssProvider>,
    root.document.getElementById('app')
);