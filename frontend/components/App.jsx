import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SessionFormContainer from './session/session_form_container';
import HomeContainer from './home/home_container';
import NavbarContainer from './navbar/navbar_container';
import SidebarContainer from './navbar/sidebar_container';
import SubmissionContainer from './submission/submission_container';
import SubmissionFormEditContainer from './submission/submission_form_edit_container';
import SubmissionFormNewContainer from './submission/submission_form_new_container';

const App = () => {

  return (
    <>
      <AuthRoute exact path='/' component={SessionFormContainer} />
      <ProtectedRoute path='/learn' component={SidebarContainer} />
      <div className="main-page">
        <ProtectedRoute path='/learn' component={NavbarContainer} />
        <ProtectedRoute exact path='/learn' component={HomeContainer} />
        <ProtectedRoute exact path='/learn/new' component={SubmissionFormNewContainer} />
        <ProtectedRoute exact path='/learn/submission/:submissionId' component={SubmissionContainer} />
        <ProtectedRoute exact path='/learn/submission/:submissionId/edit' component={SubmissionFormEditContainer} />
      </div>
    </>
  );
};

export default App;
