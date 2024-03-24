import { createSlice } from "@reduxjs/toolkit";
import { login } from "./User.Action";

interface UserState {
  user: any;
  isLoading: boolean;
  loginStatus: boolean;
}

const initialState: UserState = {
  user: {},
  isLoading: false,
  loginStatus: false,
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.loginStatus = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.loginStatus = false;
    });
  },
});

export default UserSlice.reducer;
