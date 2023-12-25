import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  SET_PAYMENT,
  SET_ADDRESS,
} from "../reducers/shoppingCartReducer";

export const addToCart = (product, count) => ({
  type: ADD_TO_CART,
  payload: { product, count },
});
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});
export const clearCart = () => ({ type: CLEAR_CART });

export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});
