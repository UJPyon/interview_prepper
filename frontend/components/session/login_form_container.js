import { connect } from "react-redux";
import { login, clearErrors, userExists } from "../../actions/session_actions";
import SessionForm from "./session_form";

const msp = state => {
  return {
    errors: state.errors.session,
    formType: "Sign in",
  };
};

const mdp = dispatch => {
  return {
    processForm: userForm => dispatch(login(userForm)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(msp, mdp)(SessionForm);