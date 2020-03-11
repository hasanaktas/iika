import React from 'react';
import Switch from 'react-router/Switch';
import { Route, Redirect } from 'react-router-dom';

export const renderRoutes = (routes, authed, authPath, extraProps = {}, switchProps = {}) =>
  routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          exact={route.exact}
          key={route.key || i}
          path={route.path}
          render={props => {
            if (!route.restricted || authed || route.path == authPath) {
              return <route.component
                {...props}
                {...extraProps}
                route={route}
                     />;
            }
            const redirPath = authPath ? authPath : '/login';
            return <Redirect to={{ pathname: redirPath, state: { from: props.location } }} />;
          }}
          strict={route.strict}
        />
      ))}
    </Switch>
  ) : null;
