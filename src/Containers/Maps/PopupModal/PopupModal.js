import React from "react";
import {
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

export default function AlertDialog(props) {
  const strToInt = str => parseInt(str.replace(/,/g, ""));
  let [show, setShow] = React.useState(true);
  return (
    <div>
      <Dialog
        open={show}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.country_name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {strToInt(props.new_cases) ? (
              <Typography variant="body2">
                New cases: {props.new_cases},{" "}
                {(
                  (strToInt(props.new_cases) / strToInt(props.cases)) *
                  100
                ).toFixed(2) + "%"}
              </Typography>
            ) : null}
            {strToInt(props.deaths) ? (
              <Typography>
                Deaths: {props.deaths},{" "}
                {(
                  (strToInt(props.deaths) / strToInt(props.cases)) *
                  100
                ).toFixed(2) + "%"}
              </Typography>
            ) : null}
            {strToInt(props.new_deaths) ? (
              <Typography variant="body2">
                New deaths: {props.new_deaths},{" "}
                {(
                  (strToInt(props.new_deaths) / strToInt(props.deaths)) *
                  100
                ).toFixed(2) + "%"}
              </Typography>
            ) : null}
            {strToInt(props.serious_critical) ? (
              <Typography variant="body2">
                Critical: {props.serious_critical},{" "}
                {(
                  (strToInt(props.serious_critical) / strToInt(props.cases)) *
                  100
                ).toFixed(2) + "%"}
              </Typography>
            ) : null}
            {strToInt(props.total_recovered) ? (
              <Typography variant="body2">
                Recovered: {props.total_recovered},{" "}
                {(
                  (strToInt(props.total_recovered) / strToInt(props.cases)) *
                  100
                ).toFixed(2) + "%"}
              </Typography>
            ) : null}
            {props.region && (
              <Typography variant="body2">
                Region: {props.region}
                <br />
              </Typography>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setShow(false);
              props.close();
            }}
            color="primary"
            autoFocus
          >
            {props.buttonText ? props.buttonText : `Close`}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
