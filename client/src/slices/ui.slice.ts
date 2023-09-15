import { createSlice } from "@reduxjs/toolkit";
let isAuth = false;

if (window.localStorage.getItem("User")) {
  isAuth = true;
}

const initialState = {
  loading: true,
  isAuth: isAuth,
  loadingRequest: false,
  error: null,
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
      if (action.payload === null) {
        window.localStorage.removeItem("isAuth");
      } else {
        window.localStorage.setItem("isAuth", action.payload);
      }
    },
    setLoadingRequest: (state, action) => {
      state.loadingRequest = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setIsAuth, setLoadingRequest, setError } =
  uiSlice.actions;
export default uiSlice.reducer;
