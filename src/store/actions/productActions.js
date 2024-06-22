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

export const fetchProducts = (category, filter, sort, limit, offset = 0) => {
  return (dispatch) => {
    const queryParams = { limit, offset };
    if (category !== undefined) queryParams.categoryId = category;
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

export const fetchBestSellers = (
  categoryId,
  sort = "rating:desc",
  limit = 8,
  offset = 0
) => {
  return (dispatch) => {
    const queryParams = { limit, offset };
    if (categoryId !== undefined) queryParams.categoryId = categoryId;
    if (sort) queryParams.sort = sort;

    AxiosInstance.get("/products", { params: queryParams })
      .then((res) => {
        if (res.data && Array.isArray(res.data.products)) {
          dispatch(setBestSellers(res.data.products));
        } else {
          console.error("Unexpected API response format:", res.data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
};
