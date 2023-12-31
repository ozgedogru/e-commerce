import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  SET_PAYMENT,
  SET_ADDRESS,
} from "../actions/shoppingCartActions";

export const shoppingCartReducer = (
  state = { cart: [], payment: {}, address: {} },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedCart = [...state.cart];
      const existingItemIndex = updatedCart.findIndex(
        (item) => item.product.id === action.payload.product.id
      );

      if (existingItemIndex !== -1) {
        updatedCart[existingItemIndex].count += action.payload.count;
      } else {
        updatedCart.push({
          count: action.payload.count,
          product: action.payload.product,
        });
      }

      return { ...state, cart: updatedCart };

    case REMOVE_FROM_CART:
      const filteredCart = state.cart.filter(
        (item) => item.product.id !== action.payload
      );
      return { ...state, cart: filteredCart };

    case CLEAR_CART:
      return { ...state, cart: [] };

    case SET_PAYMENT:
      return { ...state, payment: action.payload };

    case SET_ADDRESS:
      return { ...state, address: action.payload };

    default:
      return state;
  }
};
