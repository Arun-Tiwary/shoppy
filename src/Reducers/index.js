import { combineReducers } from "@reduxjs/toolkit";

import productsReducer from "./productsReducer";

const allReducers = combineReducers({
  products: productsReducer,
});

export default allReducers;
