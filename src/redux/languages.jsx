import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "tr",
};

export const languages = createSlice({
  name: "languages",
  initialState,
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLang } = languages.actions;
export default languages.reducer;
