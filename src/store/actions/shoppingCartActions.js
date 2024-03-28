export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const SET_ORDER_SUMMARY = "SET_ORDER_SUMMARY";
export const SET_ORDER_SUCCESS = "SET_ORDER_SUCCESS";

export const addToCart = (product, count) => (dispatch, getState) => {
  const { cart } = getState().shoppingCartReducer;
  const updatedCart = [...cart];
  const existingItemIndex = updatedCart.findIndex(
    (item) => item.product.id === product.id
  );

  if (existingItemIndex !== -1) {
    updatedCart[existingItemIndex].count += count;
  } else {
    updatedCart.push({
      count: count,
      product: product,
      checked: true,
    });
  }
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  dispatch({ type: SET_CART, payload: updatedCart });
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  const { cart } = getState().shoppingCartReducer;
  const newCart = cart.map((item) =>
    item.product.id === productId
      ? { ...item, count: item.count > 1 ? item.count - 1 : 0 }
      : item
  );
  const filteredCart = newCart.filter((item) => item.count > 0);
  dispatch({ type: SET_CART, payload: filteredCart });
};

export const removeThisProduct = (productId) => (dispatch, getState) => {
  const { cart } = getState().shoppingCartReducer;
  const updatedCart = cart.map((item) =>
    item.product.id === productId ? { ...item, count: 0 } : item
  );
  const filteredCart = updatedCart.filter((item) => item.count > 0);
  dispatch({ type: SET_CART, payload: filteredCart });
};

export const clearCart = () => (dispatch) => {
  dispatch({ type: SET_CART, payload: [] });
};

export const toggleProduct = (productId) => (dispatch, getState) => {
  const { cart } = getState().shoppingCartReducer;
  const updatedCart = cart.map((item) =>
    item.product.id === productId ? { ...item, checked: !item.checked } : item
  );
  dispatch({ type: SET_CART, payload: updatedCart });
};

export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});

export const setOrderSummary = (orderSummary) => ({
  type: SET_ORDER_SUMMARY,
  payload: orderSummary,
});

export const setOrderSuccess = (orderSuccess) => ({
  type: SET_ORDER_SUCCESS,
  payload: orderSuccess,
});
