import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export default configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: true,
});

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (gDM: any) => gDM().concat(thunkMiddleware),
// });
