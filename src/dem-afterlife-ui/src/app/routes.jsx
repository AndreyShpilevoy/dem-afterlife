/* eslint react/no-multi-comp: 0 */

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from 'containers/Layout';
import Conference from 'containers/Conference';
import Forum from 'containers/Forum';
import Topic from 'containers/Topic';

const routes = [
    {
        path: '/',
        exact: true,
        component: Conference
    },
    {
        path: '/Conference',
        exact: false,
        component: Conference
    },
    {
        path: '/Forum/forumId=:forumId&page=:pageNumber',
        exact: false,
        component: Forum
    },
    {
        path: '/Forum/forumId=:forumId',
        exact: false,
        component: Forum
    },
    {
        path: '/Topic/topicId=:topicId&page=:pageNumber',
        exact: false,
        component: Topic
    },
    {
        path: '/Topic/topicId=:topicId',
        exact: false,
        component: Topic
    }
];

const router = () => (
    <Switch>
        {
            routes.map(({path, exact, component: Component}) => (
                <Route
                    key={path}
                    path={path}
                    exact={exact}
                    render={props => (
                        <Layout {...props}>
                            <Component {...props} />
                        </Layout>
                    )
                    }
                />
            )
            )
        }
    </Switch>
);

export default router();