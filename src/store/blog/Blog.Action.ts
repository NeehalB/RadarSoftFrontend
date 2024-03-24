import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_API, apis } from "../../config/HttpConfigs";
import AxiosInterceptor from "../../config/AxiosInterceptor";

export const getBlogs = createAsyncThunk(
  "GetBlogs",
  async (_args, { rejectWithValue }) => {
    try {
      const { data } = await AxiosInterceptor.get(
        `${BASE_API}${apis.allArticles}`
      );
      return data;
    } catch (error: any) {
      const errorMessage = error.response ? error.response.data : error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

export const addBlog = createAsyncThunk(
  "AddBlog",
  async (
    blogData: { title: string; category: string; description: string },
    { rejectWithValue }
  ) => {
    try {
      const data = await AxiosInterceptor.post(
        `${BASE_API}${apis.addArticle}`,
        blogData
      );

      console.log(data);

      return data;
    } catch (error: any) {
      const errorMessage = error.response ? error.response.data : error.message;
      return rejectWithValue(errorMessage);
    }
  }
);
