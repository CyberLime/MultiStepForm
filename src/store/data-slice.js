import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", email: "", tel: "" };

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    saveData(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.tel = action.payload.tel;
    },
  },
});
