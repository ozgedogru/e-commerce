import { SET_STORE } from "../actions/storeActions";

export const storeReducer = (state = { store: {} }, action) => {
  switch (action.type) {
    case SET_STORE:
      return { ...state, store: action.payload };
    default:
      return state;
  }
};
