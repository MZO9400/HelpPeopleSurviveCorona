import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default props => {
  let help = [];
  if (props.helpRations) {
    help.push("Dry Rations");
  }
  if (props.helpMoney) {
    help.push("Monetary");
  }
  if (props.helpFood) {
    help.push("Cooked Food");
  }
  return (
    <Card variant="outlined" key={props.CNIC}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Name: {props.name}
        </Typography>
        <Typography variant="body2">CNIC: {props.CNIC}</Typography>

        <Typography variant="body2">Contact: {props.ContactNumber}</Typography>

        <Typography variant="body2">E-mail: {props.email}</Typography>

        <Typography variant="body2">Location: {props.location}</Typography>

        {help.length > 0 && (
          <Typography variant="body2">Help Type: {help.join(", ")}</Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          target="_blank"
          onClick={() => window.open(`mailto:${props.email}`, "_blank")}
        >
          Send an e-mail
        </Button>
        <Button
          color="primary"
          target="_blank"
          onClick={() => window.open(`tel:${props.ContactNumber}`, "_blank")}
        >
          Call
        </Button>
      </CardActions>
    </Card>
  );
};
