import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  jobTitle: "",
  email: "",
  city: "",
  tel: "",
  birthYear: "",
  drivingLicense: "",
  cvPicture: "",
  aboutMe: "",
  schoolName: "",
  bachelorName: "",
  bachelorStartDate: "",
  bachelorEndDate: "",
  gradutionGrade: "",
  experience: [
    {
      companyName: "",
      companyJobTitle: "",
      jobStartDate: "",
      jobEndDate: "",
      jobDesc: "",
    },
  ],
  skills: [
    {
      skillName: "",
      skillLevel: "",
    },
  ],
  languages: [
    {
      langName: "",
      langLevel: "",
    },
  ],
  socialLinks: [
    {
      socialMedia: "",
      link: "",
    },
  ],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    updateArrayField: (state, action) => {
      const { arrayName, field, value, index } = action.payload;
      state[arrayName][index][field] = value;
    },
    addArrayItem: (state, action) => {
      const { arrayName, newItem } = action.payload;
      state[arrayName].push(newItem);
    },
  },
});

export const { updateField, updateArrayField, addArrayItem } =
  formSlice.actions;
export default formSlice.reducer;
