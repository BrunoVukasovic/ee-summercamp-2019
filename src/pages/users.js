import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";

import { Spinner } from "../components";
import { Layout } from "../components";
class Users extends Component {
  // onDeleteClick = clicledUser => {
  //   const { firestore } = this.props;
  //   firestore.delete({ collection: "users", doc: clicledUser.id });
  // };
  /* <button onClick={this.onDeleteClick(user)}>Delete</button> */

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
