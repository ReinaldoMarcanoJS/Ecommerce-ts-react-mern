import { createSlice } from "@reduxjs/toolkit";
// import { setLoading } from "./ui.slice";
// import { apiRegister } from "../api/auth";
// import { User } from "../types";
const initialState = {
  User: {
    id: "",
    name: "",
    lastname: "",
    email: "",
    createAt: "",
    updateAt: "",
  },
};

// export const fetchAuth = createAsyncThunk(
//   "dataAuth/fetchAuth",
//   async (user: User, { dispatch },) => {
//     dispatch(setLoading(true))
//     apiRegister(user)
//   }
// );

export const authSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.User = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
