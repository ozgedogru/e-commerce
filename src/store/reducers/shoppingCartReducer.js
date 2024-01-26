import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  SELECT_PRODUCT,
  DESELECT_PRODUCT,
  SET_PAYMENT,
  SET_ADDRESS,
  REMOVE_THIS_PRODUCT,
} from "../actions/shoppingCartActions";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  payment: JSON.parse(localStorage.getItem("payment")) || {},
  address: JSON.parse(localStorage.getItem("address")) || {},
};

export const shoppingCartReducer = (state = initialState, action) => {
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
          checked: true,
        });
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };

    case REMOVE_FROM_CART:
      const newCart = state.cart.map((item) =>
        item.product.id === action.payload
          ? { ...item, count: item.count > 1 ? item.count - 1 : 0 }
          : item
      );
      const filteredCart = newCart.filter((item) => item.count > 0);
      localStorage.setItem("cart", JSON.stringify(filteredCart));
      return { ...state, cart: filteredCart };

    case REMOVE_THIS_PRODUCT:
      let t = state.cart.map((item) => {
        if (item.product.id === action.payload) {
          return { ...item, count: 0 };
        }
        return item;
      });
      localStorage.setItem(
        "cart",
        JSON.stringify(t.filter((item) => item.count > 0))
      );

      return {
        ...state,
        cart: t.filter((item) => item.count > 0),
      };

    case SELECT_PRODUCT:
      const selectedCart = state.cart.map((item) =>
        item.product.id === action.payload ? { ...item, checked: true } : item
      );
      localStorage.setItem("cart", JSON.stringify(selectedCart));
      return { ...state, cart: selectedCart };

    case DESELECT_PRODUCT:
      const deselectedCart = state.cart.map((item) =>
        item.product.id === action.payload ? { ...item, checked: false } : item
      );
      localStorage.setItem("cart", JSON.stringify(deselectedCart));
      return { ...state, cart: deselectedCart };

    case CLEAR_CART:
      localStorage.removeItem("cart");
      localStorage.setItem("payment", JSON.stringify(action.payload));
      return { ...state, cart: [] };

    case SET_PAYMENT:
      return { ...state, payment: action.payload };

    case SET_ADDRESS:
      localStorage.setItem("address", JSON.stringify(action.payload));
      return { ...state, address: action.payload };

    default:
      return state;
  }
};
