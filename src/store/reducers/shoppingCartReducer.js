import {
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
  SET_ORDER_SUMMARY,
} from "../actions/shoppingCartActions";

const initialState = {
  cart: [],
  payment: {},
  address: {},
  orderSum: {
    totalProductPrice: 0,
    discount: 0,
    shippingCost: 10,
    grandTotal: 0,
  },
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, cart: action.payload };

    case SET_PAYMENT:
      return { ...state, payment: action.payload };

    case SET_ADDRESS:
      localStorage.setItem("address", JSON.stringify(action.payload));
      return { ...state, address: action.payload };

    case SET_ORDER_SUMMARY:
      return { ...state, orderSum: action.payload };

    default:
      return state;
  }
};
