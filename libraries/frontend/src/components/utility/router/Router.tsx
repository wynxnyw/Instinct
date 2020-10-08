import React, { ReactNode } from 'react';
import { createBrowserHistory, History } from 'history';
import { Switch, Route, Router as BrowserRouter, RouteProps } from 'react-router-dom';

const routerHistory: History = createBrowserHistory();

const routes: RouteProps[] = [];

let landingRoute: ReactNode | undefined;
let notFoundRoute: ReactNode | undefined;

export function Router() {
  console.log(routes, routes.length);
  return (
    <BrowserRouter history={routerHistory}>
      <Switch>
        {routes.map((route: RouteProps, index: number) => (
          <Route key={index} {...route} exact />
        ))}
        {landingRoute && <Route path="/" children={landingRoute} exact />}
      </Switch>
    </BrowserRouter>
  );
}

export function setURL(url: string, component: ReactNode): void {
  routes.push({
    exact: true,
    path: `/${url}`,
    children: component,
  });
}

export function set404(component: ReactNode): void {
  notFoundRoute = component;
}

export function setLanding(component: ReactNode): void {
  landingRoute = component;
}

export function redirect(path: string): void {
  console.log('ur redirected to: ', path);
  routerHistory.push(`/${path}`);
}
