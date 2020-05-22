import React from "react";
import { Button, TextField } from "@material-ui/core";
import styles from "./Form.module.css";

export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.test}>
        <TextField
          id="outlined-basic"
          label="Please enter number..."
          variant="outlined"
          type="text"
          value={props.input}
          onChange={props.handleChange}
        />
        <Button type="submit" variant="contained" color="secondary">
          Submit
        </Button>
      </div>
    </form>
  );
}
