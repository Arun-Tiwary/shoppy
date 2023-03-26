import { configureStore } from "@reduxjs/toolkit";
import allReducers from "../Reducers";

export default configureStore({
  reducer: allReducers,
});
