import { connect } from "react-redux";
import Submission from "./submission";

const msp = state => {
  return {
    errors: state.errors.session
  };
};

const mdp = dispatch => {
  return {

    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(Submission);
