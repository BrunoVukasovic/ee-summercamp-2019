import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { withRouter } from "react-router-dom";

import { Spinner } from "../components";
import { Layout } from "../components";
class Users extends Component {
  constructor() {
    super();
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = `/register`;
    this.props.history.push(path);
  }
  render() {
    const { users } = this.props;

    if (users) {
      return (
        <Layout>
          <div>
            <h2>Lista korisnika: </h2>
            {users.map(user => (
              <p key={user.id}>Name: {user.firstName}</p>
            ))}
          </div>
          <div>
            <button onClick={this.routeChange}>Register</button>
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

Users.propTypes = {
  firestore: PropTypes.object.isRequired,
  users: PropTypes.array
};

// dohvaćamo podatke iz kolekcije users i spremamo ih u state.firestore.ordered.users
export default compose(
  firestoreConnect([{ collection: "users" }]),
  connect((state, props) => ({
    // connect state to props
    // mozemo dohvatit podatke sa this.props.users
    users: state.firestore.ordered.users
  }))
)(Users);
