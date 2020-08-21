import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import ResetPassword from "./containers/ResetPassword";
import UnauthenticatedRoute from "./components/UnathenticatedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import ChangePassword from "./containers/ChangePassword";
import ChangeEmail from "./containers/ChangeEmail";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <UnauthenticatedRoute exact path="/login">
        <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
        <Signup />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/login/reset">
        <ResetPassword />
      </UnauthenticatedRoute>
      <AuthenticatedRoute exact path="/settings/password">
        <ChangePassword />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/settings/email">
        <ChangeEmail />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/settings">
        <Settings />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/notes/new">
        <NewNote />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/notes/:id">
        <Notes />
      </AuthenticatedRoute>
      

      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
