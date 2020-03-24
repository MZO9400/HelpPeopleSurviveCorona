import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import AppBar from "./Components/AppBar/AppBar";
import MainPage from "./Containers/Main/Main";
import LoginPage from "./Containers/Login/Login";
import Volunteers from "./Components/Volunteers/Volunteers";
import ProvideAService from "./Containers/ProvideAService/ProvideAService";
import DialogModal from "./Components/DialogModal/DialogModal";
import { withSnackbar } from "notistack";
import { Button } from "@material-ui/core";
import * as actions from "./Redux/actions";

class RouterContainer extends React.Component {
  action = key => (
    <React.Fragment>
      <Button color="primary" onClick={() => this.setState({ show: true })}>
        Show
      </Button>
      <Button
        color="primary"
        onClick={() => {
          this.props.closeSnackbar(key);
        }}
      >
        Dismiss
      </Button>
    </React.Fragment>
  );
  componentDidMount() {
    this.props.enqueueSnackbar(
      <div style={{ cursor: "pointer" }}>{"Announcement"}</div>,
      {
        anchorOrigin: { vertical: "top", horizontal: "center" },
        autoHideDuration: 5000,
        action: this.action
      }
    );
    this.props.setLoggingAction();
    this.props.checkLogStatus();
  }
  state = {
    show: false
  };
  render() {
    return (
      <React.Fragment>
        <AppBar />

        {this.state.show ? (
          <DialogModal
            title="Message of the Day"
            text="In this difficult time of COVID-19 , and self Quarantine  let's make the best use if it. Lets all contribute in any way that we can to help the less fortunate folks.

            While cooking food in your home , prepare an extra meal and let us know on our app for us to deliver the meals to the poor and needy . This small act of yours can bring a huge change in our society in these  challenging times..."
            buttonText="Close"
            accept={() => this.setState({ show: false })}
          />
        ) : null}
        <Switch>
          <Route path="/" exact component={MainPage} />
          {this.props.isAdmin ? (
            <Route path="/volunteers" exact component={Volunteers} />
          ) : this.props.loggedIn ? null : (
            <Route path="/login" exact component={LoginPage} />
          )}
          <Route path="/provide-a-service" exact component={ProvideAService} />
          <Redirect to="/" />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  isAdmin: state.isAdmin
});
const mapDispatchToProps = dispatch => {
  return {
    checkLogStatus: () => dispatch(actions.checkLogStatus()),
    setLoggingAction: () => dispatch(actions.setLoggingAction())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSnackbar(RouterContainer));
