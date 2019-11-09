import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  WORKER_TYPE,
  FOREMAN_TYPE
} from "./../actions/types";
const initialState = {
  authError: null,
  tempUser: null,
  type: "client"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null
      };
    case LOGIN_ERROR:
      return {
        ...state,
        authError: action.err.message
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        authError: null
      };
    case WORKER_TYPE:
      return {
        ...state,
        type: action.type
      };
    case FOREMAN_TYPE:
      return {
        ...state,
        type: action.type
      };
    default:
      return state;
  }
}
