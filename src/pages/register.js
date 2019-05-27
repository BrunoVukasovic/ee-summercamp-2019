import React, { Component } from "react";
import PropTypes from "prop-types";
// import { compose } from "redux";
// import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { Layout } from "../components";
import styles from "../components/Button/Modal/styles.module.css";

class Register extends Component {
  state = {
    clientName: "",
    tripName: "",
    slug: "",
    date: "",
    numberOfPeople: 0
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = this.state;

    const { firestore, history } = this.props;
    firestore
      .add({ collection: "users" }, newUser)
      .then(() => history.push("/"));
  };

  render() {
    return (
      <Layout>
        <h2>Register new user:</h2>
        <p>Form:</p>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              className={styles.InputText}
              name="firstName"
              type="text"
              placeholder="Your name.."
              onChange={this.onChange}
              value={this.state.firstName}
            />

            <input
              className={styles.InputText}
              name="lastName"
              type="text"
              placeholder="Your last name.."
              onChange={this.onChange}
              value={this.state.lastName}
            />

            <input
              className={styles.InputText}
              name="phoneNumber"
              type="number"
              placeholder="Your phone number.."
              onChange={this.onChange}
              value={this.state.phoneNumber}
            />

            <input
              className={styles.InputText}
              name="email"
              type="email"
              placeholder="Your e-mail.."
              onChange={this.onChange}
              value={this.state.email}
            />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </Layout>
    );
  }
}

Register.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(Register);
