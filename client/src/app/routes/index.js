import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';

import { routerConfig, routerUnAuthConfig } from './config';
import HomeLayout from './HomeLayout';
import LoginLayout from './LoginLayout';

const history = createBrowserHistory();
const isLogin = localStorage.getItem('auth');

const AppRoute = ({ component: Component, layout: Layout }) => (
    <Route
        render={props => (
            <Layout>
                <Component {...props} />
            </Layout>
        )}
    />
);
AppRoute.propTypes = {
    component: PropTypes.elementType,
    layout: PropTypes.elementType,
};

export default React.memo(() => {
    const renderRouteList = (routerConfig, layout) =>
        Object.keys(routerConfig).map(itemKey => {
            const { path, component, key } = routerConfig[itemKey];
            return <AppRoute exact key={key} path={path} layout={layout} component={component} />;
        });

    return (
        <Router history={history}>
            {isLogin ? <Switch>{renderRouteList(routerConfig, HomeLayout)}</Switch> : <Switch>{renderRouteList(routerUnAuthConfig, LoginLayout)}</Switch>}
        </Router>
    );
});
