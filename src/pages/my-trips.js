import React, { Component } from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";

import { Spinner, LoginRedirect, BookedTrips, Container } from "../components";
import { Layout } from "../components";
import CanceledTrips from "../components/CanceledTrips";

class MyTrips extends Component {
  state = {
    upcoming: true,
    past: false,
    canceled: false
  };
  cancelTrip = bookedTrip => {
    const { firestore, history } = this.props;
    // add to canceledTrips collection (db table)
    firestore.add({ collection: "canceledTrips" }, bookedTrip);

    // delete from bookedTrips collection
    firestore
      .delete({ collection: "bookedTrips", doc: bookedTrip.id })
      .then(() => history.push("/my-trips"));
  };

  onTabClick = e => {
    const stateElements = ["upcoming", "past", "canceled"];
    for (let element of stateElements) {
      this.setState({ [element]: false });
    }

    this.setState({ [e.target.value]: true });
  };

  render() {
    const { bookedTrips, auth, canceledTrips } = this.props;
    const { upcoming, past, canceled } = this.state;

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
                  value={"upcoming"}
                >
                  Upcoming
                </button>

                <button
                  className={styles.TabLinks}
                  onClick={this.onTabClick}
                  value={"past"}
                >
                  Past
                </button>

                <button
                  className={styles.TabLinks}
                  onClick={this.onTabClick}
                  value={"canceled"}
                >
                  Canceled
                </button>
              </div>
              {upcoming ? (
                <Container>
                  <h3>Upcoming Trips: </h3>
                  {bookedTrips.map(bookedTrip => (
                    <Link to={bookedTrip.slug} key={bookedTrip.id}>
                      <BookedTrips
                        bookedTrip={bookedTrip}
                        cancelTrip={this.cancelTrip}
                      />
                    </Link>
                  ))}
                </Container>
              ) : null}

              {past ? (
                <div>
                  <h3>Past trips:</h3>
                  <p>You did not went on any trip with us yet...</p>
                </div>
              ) : null}

              {canceled ? (
                <Container>
                  <h3>Canceled trips:</h3>
                  {canceledTrips.map(canceledTrip => (
                    <Link to={canceledTrip.slug} key={canceledTrip.id}>
                      <CanceledTrips canceledTrips={canceledTrip} />
                    </Link>
                  ))}
                </Container>
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
  firestoreConnect([
    { collection: "bookedTrips" },
    { collection: "canceledTrips" }
  ]),
  connect((state, props) => ({
    // connect state to props
    // mozemo dohvatit podatke sa this.props.bookedTrips
    bookedTrips: state.firestore.ordered.bookedTrips,
    canceledTrips: state.firestore.ordered.canceledTrips,
    auth: state.firebase.auth
  }))
)(MyTrips);
