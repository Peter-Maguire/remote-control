import React from "react";
import Form from "../../common/form";
import axios from "axios";
import Joi from "joi-browser";

export default class Forgot extends Form {
  state = {
    data: {
      username: ""
    },
    error: "",
    errors: {},
    submitted: false
  };
  schema = {
    username: Joi.string().label("Username")
  };

  setError = error => {
    this.setState({ error: error });
  };

  handleSubmitError = () => {
    const { error } = this.state;
    if (error === "") {
      return <React.Fragment />;
    }
    return <div className="alert">{this.state.error}</div>;
  };

  doSubmit = () => {
    console.log("Submitting");
  };

  handleSubmitted = () => {
    return (
      <div>
        Your request has been submitted. A reset link has been sent to the email
        associated with this account.
      </div>
    );
  };

  handleForm = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("username", "Username", "text")}
        {this.renderButton("Submit")}
      </form>
    );
  };

  render() {
    const { submitted } = this.state;
    return (
      <React.Fragment>
        <div className="register-form">
          Please enter a username to reset:
          {this.handleSubmitError()}
          {submitted ? this.handleSubmitted() : this.handleForm()}
        </div>
      </React.Fragment>
    );
  }
}
