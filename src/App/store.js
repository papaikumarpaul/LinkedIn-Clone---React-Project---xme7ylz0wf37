import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: { user: userSlice },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
