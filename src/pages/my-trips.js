import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Layout } from "../components";

import { getBookedTrips } from "../actions/tripActions";

// obicni redux

class MyTrips extends Component {
  componentDidMount() {
    this.props.getBookedTrips();
  }

  render() {
    const { bookedTrips } = this.props;
    return (
      <Layout>
        <h1>My trips</h1>
        <p>{bookedTrips[0].tripID}</p>
        <p>{bookedTrips[0].numberOfPeople}</p>
      </Layout>
    );
  }
}

// mozda ovo nije potribno, ne mora imat bukirane izlete
MyTrips.propTypes = {
  bookedTrips: PropTypes.array.isRequired,
  getBookedTrips: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  bookedTrips: state.trip.bookedTrips
});

export default connect(
  mapStateToProps,
  { getBookedTrips }
)(MyTrips);
