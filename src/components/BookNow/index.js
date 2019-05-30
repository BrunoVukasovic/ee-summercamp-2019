import React, { Component } from "react";
import Layout from "../Layout";
import styles from "./styles.module.css";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import { LoginRedirect } from "..";

class BookNow extends Component {
  state = {
    clientName: "",
    tripName: this.props.location.state.tripName,
    slug: this.props.location.state.slug,
    phone: "",
    date: "",
    numberOfPeople: "",
    message: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newTrip = this.state;

    const { firestore, history } = this.props;
    firestore
      .add({ collection: "bookedTrips" }, newTrip)
      .then(() => history.push("/"));
  };

  render() {
    const { auth } = this.props;
    //if logged in
    if (auth.uid) {
      return (
        <Layout>
          <form onSubmit={this.onSubmit}>
            <h3>Trip: {this.state.tripName}</h3>
            <input
              className={styles.InputText}
              type="text"
              name="clientName"
              placeholder="Your name.."
              onChange={this.onChange}
              value={this.state.clientName}
            />

            <input
              className={styles.InputText}
              type="number"
              name="phone"
              placeholder="Your phone number.."
              onChange={this.onChange}
              value={this.state.phone}
            />

            <input
              className={styles.InputText}
              type="date"
              name="date"
              onChange={this.onChange}
              value={this.state.date}
            />

            <input
              className={styles.InputText}
              type="number"
              name="numberOfPeople"
              placeholder="Number of people..."
              onChange={this.onChange}
              value={this.state.numberOfPeople}
            />

            <input
              className={styles.InputText}
              type="text"
              name="message"
              placeholder="Your message.."
              onChange={this.onChange}
              value={this.state.message}
            />
            <input type="submit" value="Submit" className={styles.Button} />
          </form>
        </Layout>
      );
    } else {
      return (
        <LoginRedirect>You must be logged in to book a trip!</LoginRedirect>
      );
    }
  }
}

BookNow.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firebaseConnect(),
  firestoreConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
  }))
)(BookNow);
