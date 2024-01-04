import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { globalReducer } from "./reducers/globalReducer";
import { productReducer } from "./reducers/productReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
import { storeReducer } from "./reducers/storeReducer";
import { userReducer } from "./reducers/userReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

export const reducers = combineReducers({
  globalReducer,
  productReducer,
  shoppingCartReducer,
  storeReducer,
  userReducer,
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
