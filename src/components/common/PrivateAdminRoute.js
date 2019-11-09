import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { admin } from "./../../versionInfo";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  let isAuthenticated = false;

  if (auth.uid) {
    for (let i = 0; i < admin.length; i++) {
      if (auth.email == admin[i]) {
        isAuthenticated = true;
      }
    }
  }

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(PrivateRoute);
