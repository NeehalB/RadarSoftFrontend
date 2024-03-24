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

      return data;
    } catch (error: any) {
      const errorMessage = error.response ? error.response.data : error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

export const getUserBlogs = createAsyncThunk(
  "GetUserBlogs",
  async (userData: { id?: string }, { rejectWithValue }) => {
    console.log(userData);
    try {
      const { data } = await AxiosInterceptor.get(
        `${BASE_API}${apis.userArticles}`,
        {
          params: userData,
        }
      );
      return data;
    } catch (error: any) {
      const errorMessage = error.response ? error.response.data : error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

export const editUserBlog = createAsyncThunk(
  "EditUserBlog",
  async (
    blogData: {
      title: string;
      category: string;
      description: string;
      id: string;
    },
    { rejectWithValue }
  ) => {
    console.log(blogData);

    try {
      const data = await AxiosInterceptor.put(
        `${BASE_API}${apis.editArticle}`,
        blogData
      );

      return data;
    } catch (error: any) {
      const errorMessage = error.response ? error.response.data : error.message;
      return rejectWithValue(errorMessage);
    }
  }
);

export const deleteUserBlog = createAsyncThunk(
  "DeleteUserBlog",
  async (userData: { id: string }, { rejectWithValue }) => {
    try {
      const { data } = await AxiosInterceptor.delete(
        `${BASE_API}${apis.deleteUserArticle}`,
        { params: userData }
      );

      return data;
    } catch (error: any) {
      const errorMessage = error.response ? error.response.data : error.message;
      return rejectWithValue(errorMessage);
    }
  }
);
