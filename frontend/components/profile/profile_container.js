import { connect } from "react-redux";
import Profile from "./profile";

const msp = state => {
  return {
    user: state.
    errors: state.errors.session
  };
};

const mdp = dispatch => {
  return {
    processSignupForm: userForm => dispatch(signup(userForm)),
    processLoginForm: userForm => dispatch(login(userForm)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(SessionForm);
