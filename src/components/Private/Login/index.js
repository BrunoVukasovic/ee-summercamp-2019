import React, { Component } from "react";
import PropTypes from "prop-types";
// import { compose } from "redux";
// import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";

import styles from "./styles.module.css";
import { Layout } from "../../../components";

class Login extends Component {
  state = {
    email: "",
    password: "",
    message: "Enter your credentials",
    invalid: false
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();

    // const status = this.props.handleLogin(this.state);
    const { firebase } = this.props;
    const { email, password } = this.state;

    firebase
      .login({
        email,
        password
      })
      .then(() => this.props.history.push("/"))
      .catch(error => alert("Invalid Login"));

    // let { message, invalid } = this.state;
    // if (status.error) {
    //   message = status.message;
    //   invalid = true;
    //   return this.setState({ email: "", password: "", message, invalid });
    // }

    // navigate(this.props.private);
  };

  render() {
    return (
      <Layout>
        <form className={styles.LoginForm} onSubmit={this.handleSubmit}>
          <label>{this.state.message}</label>

          <input
            autoFocus
            type="text"
            name="email"
            className={styles.LoginForm__input}
            placeholder="Your email address"
            onChange={this.onChange}
            value={this.state.email}
          />

          <input
            type="password"
            name="password"
            className={styles.LoginForm__input}
            placeholder="Your password"
            onChange={this.onChange}
            value={this.state.password}
          />

          <input
            type="submit"
            className={styles.LoginForm__button}
            value={"Login"}
          />
        </form>
      </Layout>
    );
  }
}

Login.propTypes = {
  firebase: PropTypes.object.isRequired
};

export default firebaseConnect()(Login);
