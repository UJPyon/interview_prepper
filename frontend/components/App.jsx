import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SessionFormContainer from './session/session_form_container';
import HomeContainer from './home/home_container';

const App = () => {

  return (
    <>
      <div className="main-home">
        <AuthRoute exact path='/' component={SessionFormContainer} />
        <ProtectedRoute path='/learn' component={HomeContainer} />
        {/* <ProtectedRoute exact path='/home' component={HomeContainer} />
        <ProtectedRoute exact path='/home/:userId' component={ProfileContainer} />
        <ProtectedRoute exact path='/home/category/:categoryId' component={CategoryContainer} />
        <ProtectedRoute path='/home' component={Footer} /> */}
      </div>
    </>
  );
};

export default App;
