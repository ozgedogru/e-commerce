import {
  SET_PRODUCT_LIST,
  SET_TOTAL_PRODUCT_COUNT,
  SET_PAGE_COUNT,
  SET_ACTIVE_PAGE,
  SET_FETCH_STATE,
} from "../actions/productActions";

//fetch state: {String} “NOT_FETCHED” | “FETCHING” | “FETCHED” | “FAILED”

export const productReducer = (
  state = {
    productList: [],
    totalProductCount: 0,
    pageCount: 0,
    activePage: 1,
    fetchState: "NOT_FETCHED",
  },
  action
) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return { ...state, productList: action.payload };
    case SET_TOTAL_PRODUCT_COUNT:
      return { ...state, totalProductCount: action.payload };
    case SET_PAGE_COUNT:
      return { ...state, pageCount: action.payload };
    case SET_ACTIVE_PAGE:
      return { ...state, activePage: action.payload };
    case SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };
    default:
      return state;
  }
};
