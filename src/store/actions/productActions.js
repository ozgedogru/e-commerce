import { AxiosInstance } from "../../api/axiosInstance";

export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL_PRODUCT_COUNT = "SET_TOTAL_PRODUCT_COUNT";
export const SET_PAGE_COUNT = "SET_PAGE_COUNT";
export const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
export const SET_FETCH_STATE = "SET_FETCH_STATE";

export const setProductList = (products) => ({
  type: SET_PRODUCT_LIST,
  payload: products,
});
export const setTotalProductCount = (count) => ({
  type: SET_TOTAL_PRODUCT_COUNT,
  payload: count,
});
export const setPageCount = (count) => ({
  type: SET_PAGE_COUNT,
  payload: count,
});
export const setActivePage = (page) => ({
  type: SET_ACTIVE_PAGE,
  payload: page,
});
export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});

export const fetchProducts = (category, filter, sort) => {
  return (dispatch) => {
    const queryParams = {};
    if (category) queryParams.category = category;
    if (filter) queryParams.filter = filter;
    if (sort) queryParams.sort = sort;

    AxiosInstance.get("/products", { params: queryParams })
      .then((res) => {
        console.log("urunler", res.data.products);

        dispatch(setFetchState("FETCHING"));

        setTimeout(() => {
          dispatch(setProductList(res.data.products));
          dispatch(setTotalProductCount(res.data.total));

          dispatch(setFetchState("FETCHED"));
        }, 1000);
      })
      .catch((error) => {
        console.error("Error:", error);
        dispatch(setFetchState("FAILED"));
      });
  };
};
