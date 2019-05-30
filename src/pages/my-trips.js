import React, { Component } from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";

import {
  Spinner,
  TripItem,
  TripItemHeading,
  TripDescription,
  LoginRedirect
} from "../components";
import { Layout } from "../components";

class MyTrips extends Component {
  state = {
    upComingTrips: true,
    pastTrips: false,
    canceledTrips: false
  };
  cancelTrip = tripId => {
    const { firestore, history } = this.props;
    // dodat u novu bazu canceledTrips
    firestore
      .delete({ collection: "bookedTrips", doc: tripId })
      .then(() => history.push("/my-trips"));
  };

  onTabClick = e => {
    // e.preventDefault();
    const stateElements = ["upComingTrips", "pastTrips", "canceledTrips"];
    stateElements.map(stateElement => {
      this.setState({ [stateElement]: false });
    });
    this.setState({ [e.target.value]: true });
    console.log(e.target.style.backgroundColor);
  };

  render() {
    const { bookedTrips, auth } = this.props;
    const { upComingTrips, pastTrips, canceledTrips } = this.state;
    const tripDescriptionStyle = { fontSize: "larger" };

    // if logged in
    if (auth.uid) {
      // if bookedTrips are fetched
      if (bookedTrips) {
        return (
          <Layout>
            <div>
              <h2>My Trips: </h2>

              <div className={styles.Tab}>
                <button
                  className={styles.TabLinks}
                  onClick={this.onTabClick}
                  value={"upComingTrips"}
                >
                  UpComing
                </button>

                <button
                  className={styles.TabLinks}
                  onClick={this.onTabClick}
                  value={"pastTrips"}
                >
                  Past
                </button>

                <button
                  className={styles.TabLinks}
                  onClick={this.onTabClick}
                  value={"canceledTrips"}
                >
                  Canceled
                </button>
              </div>
              {upComingTrips ? (
                <div>
                  <h3>Upcoming Trips: </h3>
                  {bookedTrips.map(bookedTrip => (
                    <Link to={bookedTrip.slug} key={bookedTrip.id}>
                      <TripItem>
                        <img
                          src={require("../images" + bookedTrip.slug + ".jpg")}
                          alt={bookedTrip.tripName}
                          width="100%"
                        />
                        <TripItemHeading>
                          {"Trip: " + bookedTrip.tripName}
                        </TripItemHeading>

                        <div className={styles.myTripsDiv}>
                          <TripDescription style={tripDescriptionStyle}>
                            <strong>Lead Traveler Name: </strong>
                            {bookedTrip.clientName}
                            <br />
                            <strong>Date: </strong>
                            {bookedTrip.date}
                            <br />
                            <strong>Group size: </strong>
                            {bookedTrip.numberOfPeople}
                            <br />
                          </TripDescription>
                          <button
                            onClick={() => this.cancelTrip(bookedTrip.id)}
                            className={styles.CancelButton}
                          >
                            Cancel
                          </button>
                        </div>
                      </TripItem>
                    </Link>
                  ))}
                </div>
              ) : null}

              {pastTrips ? (
                <div>
                  <h3>Past trips:</h3>
                </div>
              ) : null}

              {canceledTrips ? (
                <div>
                  <h3>Canceled trips:</h3>
                </div>
              ) : null}
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
    } else {
      return (
        <LoginRedirect>
          You must be logged in to view booked trips!
        </LoginRedirect>
      );
    }
  }
}

MyTrips.propTypes = {
  firestore: PropTypes.object.isRequired,
  bookedTrips: PropTypes.array
};

// dohvaćamo podatke iz kolekcije bookedTrips i spremamo ih u state.firestore.ordered.bookedTrips
export default compose(
  firestoreConnect([{ collection: "bookedTrips" }]),
  connect((state, props) => ({
    // connect state to props
    // mozemo dohvatit podatke sa this.props.users
    bookedTrips: state.firestore.ordered.bookedTrips,
    auth: state.firebase.auth
  }))
)(MyTrips);
