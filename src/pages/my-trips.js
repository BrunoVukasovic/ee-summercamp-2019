import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";

import { Spinner } from "../components";
import { Layout } from "../components";
class MyTrips extends Component {
  render() {
    const { bookedTrips } = this.props;

    if (bookedTrips) {
      return (
        <Layout>
          <div>
            <h2>My Trips: </h2>
            {bookedTrips.map(bookedTrip => (
              <p key={bookedTrip.id}>Name: {bookedTrip.tripName}</p>
            ))}
          </div>
          <div>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
        </Layout>
      );
    } else {
      return (
        <Layout>
          <Spinner />
        </Layout>
      );
    }
  }
}

MyTrips.propTypes = {
  firestore: PropTypes.object.isRequired,
  bookedTrips: PropTypes.array
};

// dohvaćamo podatke iz kolekcije users i spremamo ih u state.firestore.ordered.users
export default compose(
  firestoreConnect([{ collection: "bookedTrips" }]),
  connect((state, props) => ({
    // connect state to props
    // mozemo dohvatit podatke sa this.props.users
    bookedTrips: state.firestore.ordered.bookedTrips
  }))
)(MyTrips);
