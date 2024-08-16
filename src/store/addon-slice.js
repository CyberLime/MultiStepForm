import { createSlice } from "@reduxjs/toolkit";

const initialState = { addons: [], price: [] };

export const addonSlice = createSlice({
  name: "addon",
  initialState,
  reducers: {
    changeAddons(state, action) {
      const index = state.addons.indexOf(action.payload.id);
      if (index === -1) {
        state.addons.push(action.payload.id);
        state.price.push(action.payload.price);
      } else {
        state.addons.splice(index, 1);
        state.price.splice(index, 1);
      }
    },
  },
});
