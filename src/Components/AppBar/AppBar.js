import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CircularProgress from "@material-ui/core/CircularProgress";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import StarsIcon from "@material-ui/icons/Stars";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import * as actions from "../../Redux/actions";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  list: {
    width: 250,
    cursor: "pointer"
  }
}));

const useStylesProgress = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  }
}));
function CircularIndeterminate() {
  const classes = useStylesProgress();

  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
}

const Nav = props => {
  let title = "Home";
  switch (props.location.pathname) {
    case "/provide-a-service":
      title = "Provide a service";
      break;
    case "/login":
      title = "Sign in";
      break;
    case "/":
      title = "Home";
      break;
    case "/volunteers":
      title = "See Volunteers";
      break;
    default:
      title = "Home";
      break;
  }
  const classes = useStyles();
  let [isDrawerOpen, setDrawer] = React.useState(false);
  let volunteers = props.isAdmin ? (
    <ListItem onClick={() => props.history.push("/volunteers")}>
      <ListItemIcon>
        <StarsIcon />
      </ListItemIcon>
      <ListItemText>Volunteers</ListItemText>
    </ListItem>
  ) : null;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            {props.isAdmin ? <StarsIcon /> : null}
            {props.loggingAction ? (
              <CircularIndeterminate />
            ) : props.loggedIn ? (
              <Button color="inherit" onClick={() => props.logOut()}>
                Sign Out
              </Button>
            ) : (
              <Button
                color="inherit"
                onClick={() => props.history.push("/login")}
              >
                Sign In
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
      <SwipeableDrawer
        anchor={"left"}
        open={isDrawerOpen}
        onClose={() => setDrawer(false)}
        onOpen={() => setDrawer(true)}
      >
        <div
          className={classes.list}
          role="presentation"
          onClick={() => setDrawer(false)}
          onKeyDown={() => setDrawer(false)}
        >
          <List>
            <ListItem onClick={() => props.history.push("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home Page</ListItemText>
            </ListItem>
            <ListItem onClick={() => props.history.push("/provide-a-service")}>
              <ListItemIcon>
                <FavoriteRoundedIcon />
              </ListItemIcon>
              <ListItemText>Provide a Service</ListItemText>
            </ListItem>
          </List>
          <Divider />
          {volunteers}

          {props.loggingAction ? (
            <CircularIndeterminate />
          ) : props.loggedIn ? (
            <List onClick={() => props.logOut()}>
              <ListItem>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText>Sign out</ListItemText>
              </ListItem>
            </List>
          ) : (
            <List onClick={() => props.history.push("/login")}>
              <ListItem>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText>Sign in</ListItemText>
              </ListItem>
            </List>
          )}
        </div>
      </SwipeableDrawer>
    </React.Fragment>
  );
};
const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    isAdmin: state.isAdmin,
    loggingAction: state.loggingAction,
    error: state.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(actions.logOut()),
    resetError: () => dispatch(actions.resetErrorCode())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Nav));
