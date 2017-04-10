import React from 'react';
import Route from 'react-router-dom/Route';
import Layout from 'containers/Layout';
import Conference from 'containers/Conference';

const router = () =>
    <Layout>
        <Route render={() =>
            <div>
                <Route exact path='/' component={Conference} />
                <Route path='/Conference' component={Conference} />
            </div>
        } />
    </Layout>;

export default router();