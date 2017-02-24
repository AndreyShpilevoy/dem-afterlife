import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from 'containers/Layout';
import Conference from 'containers/Conference';

export default (
    <Route path='/' component={Layout}>
        <IndexRoute component={Conference} />
        <Route path='/Conference' component={Conference} />
    </Route>
);