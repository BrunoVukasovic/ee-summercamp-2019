import React, { Component } from "react";
import styles from "./styles.module.css";
import { TripItem, TripItemHeading, TripDescription } from "../../components";

export default class CanceledTrips extends Component {
  render() {
    const { canceledTrips } = this.props;
    const tripDescriptionStyle = { fontSize: "larger" };
    return (
      <TripItem>
        <img
          src={require("../../images/4x3" + canceledTrips.slug + ".jpg")}
          alt={canceledTrips.tripName}
          width="100%"
        />
        <strike>
          <TripItemHeading>{"Trip: " + canceledTrips.tripName}</TripItemHeading>
        </strike>

        <div className={styles.myTripsDiv}>
          <TripDescription style={tripDescriptionStyle}>
            <strong>Lead Traveler Name: </strong>
            {canceledTrips.clientName}
            <br />
            <strong>Date: </strong>
            {canceledTrips.date}
            <br />
            <strong>Group size: </strong>
            {canceledTrips.numberOfPeople}
            <br />
          </TripDescription>
          <p className={styles.Note}>Canceled!</p>
        </div>
      </TripItem>
    );
  }
}
