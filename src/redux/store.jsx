import { configureStore } from "@reduxjs/toolkit";
import progressbarSlice from "./progressbarSlice";

export const store = configureStore({
  reducer: {
    progressbar: progressbarSlice,
  },
});
