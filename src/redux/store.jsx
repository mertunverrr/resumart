import { configureStore } from "@reduxjs/toolkit";
import progressbarSlice from "./progressbarSlice";
import formSlice from "./formSlice";

export const store = configureStore({
  reducer: {
    progressbar: progressbarSlice,
    form: formSlice,
  },
});
