import { AxiosInstance } from "../../api/axiosInstance";

export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const CLEAR_PRODUCT_LIST = "CLEAR_PRODUCT_LIST";
export const SET_BEST_SELLERS = "SET_BEST_SELLERS";
export const SET_TOTAL_PRODUCT_COUNT = "SET_TOTAL_PRODUCT_COUNT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FETCH_STATE = "SET_FETCH_STATE";

export const setProductList = (products) => ({
  type: SET_PRODUCT_LIST,
  payload: products,
});
export const clearProductList = () => ({
  type: CLEAR_PRODUCT_LIST,
});
export const setBestSellers = (products) => ({
  type: SET_BEST_SELLERS,
  payload: products,
});
export const setTotalProductCount = (count) => ({
  type: SET_TOTAL_PRODUCT_COUNT,
  payload: count,
});

export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset,
});
export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});

export const fetchProducts = (
  category,
  filter,
  sort,
  limit = 10,
  offset = 0
) => {
  return (dispatch) => {
    const queryParams = { limit, offset };
    if (category) queryParams.category = category;
    if (filter) queryParams.filter = filter;
    if (sort) queryParams.sort = sort;

    AxiosInstance.get("/products", { params: queryParams })
      .then((res) => {
        console.log("res.data", res.data);

        dispatch(setFetchState("FETCHING"));

        dispatch(setProductList(res.data.products));
        dispatch(setTotalProductCount(res.data.total));

        dispatch(setFetchState("FETCHED"));
      })
      .catch((error) => {
        console.error("Error:", error);
        dispatch(setFetchState("FAILED"));
      });
  };
};

export const fetchBestSellers = (category, sort = "rating:desc") => {
  return (dispatch) => {
    const params = {};
    if (category) params.category = category;
    if (sort) params.sort = sort;

    AxiosInstance.get("/products", { params: { category, sort } })
      .then((res) => {
        console.log("res.data", res.data);

        dispatch(setBestSellers(res.data.products));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};
