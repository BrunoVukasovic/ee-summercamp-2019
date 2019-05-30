import React, { Component } from "react";
import styles from "./styles.module.css";
import { TripItem, TripItemHeading, TripDescription } from "../../components";

export default class BookedTrips extends Component {
  render() {
    const { bookedTrip } = this.props;
    const tripDescriptionStyle = { fontSize: "larger" };
    return (
      <TripItem>
        <img
          src={require("../../images" + bookedTrip.slug + ".jpg")}
          alt={bookedTrip.tripName}
          width="100%"
        />
        <TripItemHeading>{"Trip: " + bookedTrip.tripName}</TripItemHeading>

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
            onClick={() => this.props.cancelTrip(bookedTrip)}
            className={styles.CancelButton}
          >
            Cancel
          </button>
        </div>
      </TripItem>
    );
  }
}
