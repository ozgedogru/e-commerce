import { SET_LOGGED_IN, SET_LOGGED_OUT } from "../actions/userActions";

const initialState = {
  isLoggedIn: false,
  user: {
    name: null,
    email: null,
    token: null,
    role_id: null,
  },
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return { ...state, user: action.payload, isLoggedIn: true };
    case SET_LOGGED_OUT:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
