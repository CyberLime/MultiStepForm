import { createSlice } from "@reduxjs/toolkit";

const initialState = { plan: "", option: "Monthly", price: 0 };

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    changePlan(state, action) {
      state.plan = action.payload.plan;
      state.price = action.payload.price;
    },
    changeOption(state, action) {
      state.option = action.payload;
    },
  },
});
