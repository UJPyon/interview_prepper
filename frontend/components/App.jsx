import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SessionFormContainer from './session/session_form_container';
import HomeContainer from './home/home_container';
import NavbarContainer from './navbar/navbar_container';
import SubmissionContainer from './submission/submission_container';
import SubmissionFormContainer from './submission/submission_form_edit_container';
import NewSubmissionContainer from './submission/submission_form_new_container';

const App = () => {

  return (
    <>
      <div className="main-home">
        <AuthRoute exact path='/' component={SessionFormContainer} />
        <ProtectedRoute path='/learn' component={NavbarContainer} />
        <ProtectedRoute exact path='/learn' component={HomeContainer} />
        <ProtectedRoute exact path='/learn/new' component={NewSubmissionContainer} />
        <ProtectedRoute exact path='/learn/:submissionId' component={SubmissionContainer} />
        <ProtectedRoute exact path='/learn/:submissionId/edit' component={SubmissionFormContainer} />
      </div>
    </>
  );
};

export default App;
