import React from 'react';
import { Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Modal />
      <div className="main-home">
        <Switch>
          <AuthRoute exact path='/' component={SplashPageContainer} />
          <AuthRoute exact path='/signup' component={SignUpFormContainer} />
          <AuthRoute exact path='/login' component={LoginFormContainer} />
        </Switch>
        <ProtectedRoute path='/home' component={Navbar} />
        <ProtectedRoute exact path='/home' component={HomeContainer} />
        <ProtectedRoute exact path='/home/:userId' component={ProfileContainer} />
        <ProtectedRoute exact path='/home/category/:categoryId' component={CategoryContainer} />
        <ProtectedRoute path='/home' component={Footer} />
      </div>
    </>
  );
};

export default App;
