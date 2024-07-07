import { combineReducers } from "@reduxjs/toolkit";
import authReducers from "./auth/authReducers";

const rootReducer = combineReducers({
  auth: authReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
