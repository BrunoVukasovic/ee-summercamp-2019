import React, { Component } from "react";
import { Layout } from "../components";
import styles from "../components/Button/Modal/styles.module.css";

export default class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Layout>
        <h2>Register new user:</h2>
        <p>Form:</p>
        <div>
          <label for="firstName">First Name:</label>
          <input
            className={styles.InputText}
            name="firstName"
            type="text"
            placeholder="Your name.."
            onChange={this.onChange}
            value={this.state.firstName}
          />

          <label for="lastName">Last Name:</label>
          <input
            className={styles.InputText}
            name="lastName"
            type="text"
            placeholder="Your last name.."
            onChange={this.onChange}
            value={this.state.lastName}
          />

          <label for="phoneNumber">Phone Number:</label>
          <input
            className={styles.InputText}
            name="phoneNumber"
            type="number"
            placeholder="Your phone number.."
            onChange={this.onChange}
            value={this.state.phoneNumber}
          />

          <label for="email">E-mail:</label>
          <input
            className={styles.InputText}
            name="email"
            type="email"
            placeholder="Your e-mail.."
            onChange={this.onChange}
            value={this.state.email}
          />

          <button onClick={this.handleSubmit} className={styles.Cancle}>
            Cancle
          </button>
          <button onClick={this.handleSubmit} className={styles.Submit}>
            Submit
          </button>
        </div>
      </Layout>
    );
  }
}
