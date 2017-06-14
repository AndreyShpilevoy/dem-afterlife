/* eslint react/no-multi-comp: 0 */

import React from 'react';
import Route from 'react-router-dom/Route';
import Layout from 'containers/Layout';
import Conference from 'containers/Conference';

const routeRender = () =>
    <div>
        <Route exact path='/' component={Conference} />
        <Route path='/Conference' component={Conference} />
    </div>;

const router = () =>
    <Layout>
        <Route render={routeRender} />
    </Layout>;

export default router();