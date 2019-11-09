import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  WORKER_TYPE,
  FOREMAN_TYPE
} from "./types";

export const logInUser = user => (dispatch, getState, { getFirebase }) => {
  let firebase = getFirebase();
  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS });
      console.log("login success");
    })
    .catch(err => {
      console.log("login error, err is: " + JSON.stringify(err));
      dispatch({ type: LOGIN_ERROR, err });
    });
};

export const logOutUser = () => (dispatch, getState, { getFirebase }) => {
  console.log("got to logoutuser");
  let firebase = getFirebase();
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: LOGOUT_SUCCESS });
    });
};
