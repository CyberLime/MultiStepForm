import { configureStore } from "@reduxjs/toolkit";

import { dataSlice } from "./data-slice";
import { planSlice } from "./plan-slice";
import { addonSlice } from "./addon-slice";

const store = configureStore({
  reducer: {
    dataReducer: dataSlice.reducer,
    planReducer: planSlice.reducer,
    addonReducer: addonSlice.reducer,
  },
});

export const dataActions = dataSlice.actions;
export const planActions = planSlice.actions;
export const addonActions = addonSlice.actions;

export default store;
