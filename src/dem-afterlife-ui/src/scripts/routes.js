/* eslint react/no-multi-comp: 0 */

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from 'containers/Layout';
import Conference from 'containers/Conference';
import Forum from 'containers/Forum';

// const routeRender = () =>
//     <Switch wrapperComponent={Layout}>
//         <Route exact path='/' component={Conference} />
//         <Route path='/Conference' component={Conference} />
//         <Route path='/Forum/:forumId' component={Forum}/>
//     </Switch>;
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
        path: '/Forum/:forumId',
        exact: false,
        component: Forum
    }
];

const router = () =>
    <Switch>
        {
            routes.map(({path, exact, component: Component}) =>
                <Route
                    key={path}
                    path={path}
                    exact={exact}
                    render={props =>
                        <Layout {...props}>
                            <Component {...props} />
                        </Layout>
                    }
                />
            )
        }
    </Switch>;

export default router();