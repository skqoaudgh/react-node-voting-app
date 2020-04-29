import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthPage from '../pages/AuthPage';

const RouteViews = ({ auth }) => (
  <main>
    <Switch>
      <Route
        exact
        path="/login"
        render={() => (
          <AuthPage authType="login" isAuthenticated={auth.isAuthenticated} />
        )}
      />
      <Route
        exact
        path="/register"
        render={() => (
          <AuthPage
            authType="register"
            isAuthenticated={auth.isAuthenticated}
          />
        )}
      />
    </Switch>
  </main>
);

export default withRouter(
  connect((store) => ({ auth: store.auth }))(RouteViews)
);
