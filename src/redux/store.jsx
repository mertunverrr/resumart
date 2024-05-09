import { configureStore } from "@reduxjs/toolkit";
import progressbarSlice from "./progressbarSlice";
import formSlice from "./formSlice";
import languageSlice from "./languages";

export const store = configureStore({
  reducer: {
    progressbar: progressbarSlice,
    form: formSlice,
    language: languageSlice,
  },
});
