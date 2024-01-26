export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const REMOVE_THIS_PRODUCT = "REMOVE_THIS_PRODUCT";
export const CLEAR_CART = "CLEAR_CART";
export const SELECT_PRODUCT = "SELECT_PRODUCT";
export const DESELECT_PRODUCT = "DESELECT_PRODUCT";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";

export const addToCart = (product, count) => ({
  type: ADD_TO_CART,
  payload: { product, count },
});
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});
export const removeThisProduct = (productId) => ({
  type: REMOVE_THIS_PRODUCT,
  payload: productId,
});
export const clearCart = () => ({ type: CLEAR_CART });

export const selectProduct = (productId) => ({
  type: SELECT_PRODUCT,
  payload: productId,
});

export const deselectProduct = (productId) => ({
  type: DESELECT_PRODUCT,
  payload: productId,
});

export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});
