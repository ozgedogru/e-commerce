import {
  SET_PRODUCT_LIST,
  CLEAR_PRODUCT_LIST,
  SET_BEST_SELLERS,
  SET_TOTAL_PRODUCT_COUNT,
  SET_OFFSET,
  SET_FETCH_STATE,
} from "../actions/productActions";

//fetch state: {String} “NOT_FETCHED” | “FETCHING” | “FETCHED” | “FAILED”

export const productReducer = (
  state = {
    productList: [],
    bestSellers: [],
    totalProductCount: 0,
    offset: 0,
    fetchState: "NOT_FETCHED",
  },
  action
) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return {
        ...state,
        productList: [...state.productList, ...action.payload],
      };
    case CLEAR_PRODUCT_LIST:
      return {
        ...state,
        productList: [],
      };
    case SET_BEST_SELLERS:
      return {
        ...state,
        bestSellers: action.payload,
      };
    case SET_TOTAL_PRODUCT_COUNT:
      return { ...state, totalProductCount: action.payload };
    case SET_OFFSET:
      return { ...state, offset: action.payload };
    case SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };
    default:
      return state;
  }
};
