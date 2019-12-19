import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SessionFormContainer from './session/session_form_container';
import HomeContainer from './home/home_container';
import NavbarContainer from './navbar/navbar_container';

const App = () => {

  return (
    <>
      <div className="main-home">
        <AuthRoute exact path='/' component={SessionFormContainer} />
        <ProtectedRoute path='/learn' component={NavbarContainer} />
        <ProtectedRoute exact path='/learn' component={HomeContainer} />
      </div>
    </>
  );
};

export default App;
