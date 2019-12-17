import { connect } from "react-redux";
import { signup, login, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const msp = state => {
  return {
    errors: state.errors.session,
  };
};

const mdp = dispatch => {
  return {
    processSignupForm: userForm => dispatch(signup(userForm)),
    processLoginForm: userForm => dispatch(login(userForm)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(msp, mdp)(SessionForm);