import { SET_USER } from "../actions/userActions";

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
