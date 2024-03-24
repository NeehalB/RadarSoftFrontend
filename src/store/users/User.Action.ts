import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_API, apis } from "../../config/HttpConfigs";

export const login = createAsyncThunk(
  "userlogin",
  async (
    userData: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.post(`${BASE_API}${apis.login}`, userData);
      console.log(data);

      return data;
    } catch (error: any) {
      const errorMessage = error.response ? error.response.data : error.message;
      return rejectWithValue(errorMessage);
    }
  }
);
