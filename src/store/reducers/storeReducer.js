const storeReducer = (state = { store: {} }, action) => {
  switch (action.type) {
    case "SET_STORE":
      return { ...state, store: action.payload };
    default:
      return state;
  }
};
