const setProductList = (products) => ({
  type: "SET_PRODUCT_LIST",
  payload: products,
});
const setTotalProductCount = (count) => ({
  type: "SET_TOTAL_PRODUCT_COUNT",
  payload: count,
});
const setPageCount = (count) => ({ type: "SET_PAGE_COUNT", payload: count });
const setActivePage = (page) => ({ type: "SET_ACTIVE_PAGE", payload: page });
const setFetchState = (fetchState) => ({
  type: "SET_FETCH_STATE",
  payload: fetchState,
});
