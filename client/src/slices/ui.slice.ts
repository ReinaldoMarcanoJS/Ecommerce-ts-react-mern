import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  isAuth: false,
  loadingRequest: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setLoadingRequest: (state, action) => {
      state.loadingRequest = action.payload;
    },
  },
});

export const { setLoading, setIsAuth, setLoadingRequest } = uiSlice.actions;
export default uiSlice.reducer;
