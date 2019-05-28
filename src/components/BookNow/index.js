import React, { Component } from "react";
import Layout from "../Layout";
import styles from "./styles.module.css";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";

class BookNow extends Component {
  state = {
    clientName: "",
    tripName: "",
    slug: "",
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

    // ne radi
    this.setState({
      tripName: this.props.location.state.tripName,
      slug: this.props.location.state.slug
    });

    const newTrip = this.state;

    const { firestore, history } = this.props;
    firestore
      .add({ collection: "bookedTrips" }, newTrip)
      .then(() => history.push("/"));
  };

  render() {
    return (
      <Layout>
        <form onSubmit={this.onSubmit}>
          <h3>Trip: {this.props.location.state.tripName}</h3>
          <h3>Trip: {this.props.location.state.slug}</h3>
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
  }
}

BookNow.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(BookNow);
