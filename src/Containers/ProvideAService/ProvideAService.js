import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { uploadData } from "../../Redux/actions";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Box
} from "@material-ui/core/";
import DialogModal from "../../Components/DialogModal/DialogModal";

const useStylesInput = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
      display: "flex"
    }
  },
  "@media (max-device-width: 700px)": {
    root: {
      margin: theme.spacing(1),
      display: "flex",
      width: "100%"
    }
  }
}));
export default props => {
  const { children, value, index } = props;

  const classes = useStylesInput();
  const [name, setName] = React.useState("");
  const [CNIC, setCNIC] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [ContactNumber, setNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [validationError, setError] = React.useState(false);
  const [helpFood, setFoodHelp] = React.useState(false);
  const [helpRations, setRaionsHelp] = React.useState(false);
  const [helpMoney, setMoney] = React.useState(false);
  const validation = () => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    const CNICRegex = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/g;
    const ContactNumberRegex = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/g;
    return (
      email &&
      CNIC &&
      location &&
      ContactNumber &&
      name &&
      emailRegex.test(email) &&
      CNICRegex.test(CNIC) &&
      ContactNumberRegex.test(ContactNumber) &&
      (helpFood || helpMoney || helpRations)
    );
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (!validation()) {
      setError(true);
    }
    uploadData(
      name,
      CNIC,
      location,
      ContactNumber,
      email,
      helpFood,
      helpRations,
      helpMoney
    );
  };
  const handleChange = (event, handleFN) => {
    handleFN(event.target.value);
  };
  return (
    <form
      className={classes.root}
      autoComplete="on"
      style={{ justifyContent: "center", display: "flex" }}
    >
      <div>
        {validationError && (
          <DialogModal
            title="Validation Error"
            text="Please enter correct details to continue"
            accept={() => setError(false)}
          />
        )}
        <TextField
          id="name"
          type="name"
          label="Name"
          value={name}
          onChange={e => handleChange(e, setName)}
          required
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={e => handleChange(e, setEmail)}
          required
        />
        <TextField
          id="phone"
          label="Contact"
          type="phone"
          value={ContactNumber}
          onChange={e => handleChange(e, setNumber)}
          required
        />
        <TextField
          id="location"
          label="City"
          type="location"
          value={location}
          onChange={e => handleChange(e, setLocation)}
          required
        />
        <TextField
          id="CNIC"
          label="CNIC"
          type="text"
          value={CNIC}
          onChange={e => handleChange(e, setCNIC)}
          required
        />
        <div style={{ display: "grid" }}>
          <FormControlLabel
            value={helpFood}
            control={<Checkbox color="primary" />}
            label="Provide Cooked Food"
            labelPlacement="end"
            onChange={() => setFoodHelp(!helpFood)}
          />
          <FormControlLabel
            value={helpRations}
            control={<Checkbox color="primary" />}
            label="Provide Dry Rations"
            labelPlacement="end"
            onChange={() => setRaionsHelp(!helpRations)}
          />
          <FormControlLabel
            value={helpMoney}
            control={<Checkbox color="primary" />}
            label="Provide Money"
            labelPlacement="end"
            onChange={() => setMoney(!helpMoney)}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={e => handleSubmit(e)}
          fullWidth
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
