import React, { Component } from "react";
import mappings from "./../mappings";
import Form from "./../Form/Form";
import { Button } from "@material-ui/core";

export class CardToNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: Math.ceil(Math.random() * 52),
      input: "",
      submit: "",
    };
  }

  // handles change in text input
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  // handles submission of text
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submit: this.state.input,
    });
  };

  // handles click of 'next' button
  handleClick = () => {
    this.setState({
      index: Math.ceil(Math.random() * 52),
      input: "",
      submit: "",
    });
  };

  render() {
    return (
      <div>
        <h3>What is position of the?</h3>
        <h1> {mappings[this.state.index].symbol}</h1>
        <Form
          input={this.state.input}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.submit === "" ? (
          <p></p>
        ) : this.state.submit == this.state.index ? (
          <div>
            <p>Correct!</p>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleClick}
            >
              Next
            </Button>
          </div>
        ) : (
          <p>Incorrect, please try again!</p>
        )}
      </div>
    );
  }
}

export default CardToNumber;
