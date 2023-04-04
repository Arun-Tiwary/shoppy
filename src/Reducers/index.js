import { combineReducers } from "@reduxjs/toolkit";

import productsReducer from "./productsReducer";
import userDataReducer from "./userDataReducer";

const allReducers = combineReducers({
  products: productsReducer,
  userData: userDataReducer,
});

export default allReducers;
