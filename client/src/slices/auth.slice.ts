import { createSlice } from "@reduxjs/toolkit";

let user = {
  id: "",
  name: "",
  lastname: "",
  email: "",
  createAt: "",
  updateAt: "",
};

  let userls = window.localStorage.getItem("User")
  if(userls != null){
    user = JSON.parse(userls)
  }


const initialState = {
  User: user,
};

export const authSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.User = action.payload;
      if (action.payload === null) {
        window.localStorage.removeItem("User");
      } else {
        window.localStorage.setItem("User", JSON.stringify(action.payload));
      }
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
