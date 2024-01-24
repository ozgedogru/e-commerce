import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  SET_PAYMENT,
  SET_ADDRESS,
  REMOVE_THIS_PRODUCT,
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
      const newCart = state.cart.map((item) =>
        item.product.id === action.payload
          ? { ...item, count: item.count > 1 ? item.count - 1 : 0 }
          : item
      );
      const filteredCart = newCart.filter((item) => item.count > 0);
      return { ...state, cart: filteredCart };

    case REMOVE_THIS_PRODUCT:
      const t = state.cart.map((item) => {
        if (item.product.id === action.payload) {
          // Update count to 0 for the removed product
          return { ...item, count: 0 };
        }
        return item;
      });

      return {
        ...state,
        cart: t.filter((item) => item.count > 0), // Remove items with count 0
      };

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
