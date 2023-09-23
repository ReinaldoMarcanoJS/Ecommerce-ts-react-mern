import { createSlice } from "@reduxjs/toolkit";




const initialState = {
  products: [],
};

export const authSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = authSlice.actions;
export default authSlice.reducer;
