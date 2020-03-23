import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CSS from "./CovidCard.module.css";

const strToInt = str => parseInt(str.replace(/,/g, ""));
export default props => (
  <Card variant="outlined" key={props.country_name} className={CSS.anim}>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {props.country_name}
      </Typography>
      <Typography variant="body2">Cases: {props.cases}</Typography>
      {strToInt(props.new_cases) ? (
        <Typography variant="body2">
          New cases: {props.new_cases},{" "}
          {((strToInt(props.new_cases) / strToInt(props.cases)) * 100).toFixed(
            2
          ) + "%"}
        </Typography>
      ) : null}
      {strToInt(props.deaths) ? (
        <Typography>
          Deaths: {props.deaths},{" "}
          {((strToInt(props.deaths) / strToInt(props.cases)) * 100).toFixed(2) +
            "%"}
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
    </CardContent>
  </Card>
);
