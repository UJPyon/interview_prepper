import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SignUpFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

const App = () => {

  return (
    <>
      <div className="main-home">
        {/* <AuthRoute exact path='/' component={} /> */}
        <Switch>
          <AuthRoute exact path='/signup' component={SignUpFormContainer} />
          <AuthRoute exact path='/login' component={LoginFormContainer} />
        </Switch>
        {/* <ProtectedRoute path='/dash' component={Navbar} />
        <ProtectedRoute exact path='/home' component={HomeContainer} />
        <ProtectedRoute exact path='/home/:userId' component={ProfileContainer} />
        <ProtectedRoute exact path='/home/category/:categoryId' component={CategoryContainer} />
        <ProtectedRoute path='/home' component={Footer} /> */}
      </div>
    </>
  );
};

export default App;
