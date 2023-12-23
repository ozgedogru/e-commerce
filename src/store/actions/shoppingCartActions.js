const addToCart = (product, count) => ({
  type: "ADD_TO_CART",
  payload: { product, count },
});
const removeFromCart = (productId) => ({
  type: "REMOVE_FROM_CART",
  payload: productId,
});
const clearCart = () => ({ type: "CLEAR_CART" });

const setPayment = (payment) => ({ type: "SET_PAYMENT", payload: payment });

const setAddress = (address) => ({ type: "SET_ADDRESS", payload: address });
