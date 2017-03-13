/* eslint react/jsx-no-bind: 'off' */

import React from 'react';
import Route from 'react-router/Route';
import Layout from 'containers/Layout';
import Conference from 'containers/Conference';

export default (
    <Layout>
        <Route render={() => (
            <div>
                <Route exact path='/' component={Conference} />
                <Route path='/Conference' component={Conference} />
            </div>
        )} />
    </Layout>
);