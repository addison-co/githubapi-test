import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import UserListView from '../containers/UserListView';
import UserDetailView from '../containers/UserDetailView';

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/users" component={UserListView} />
        <Route path="/user/:id" component={UserDetailView} />
        <Redirect to="/users" />
      </Switch>
    </div>
  );
};

export default AppRouter;
