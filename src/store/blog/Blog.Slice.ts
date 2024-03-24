import { createSlice } from "@reduxjs/toolkit";
import { addBlog, getBlogs } from "./Blog.Action";

interface BlogData {
  blogs: any;
  blog: any;
  isLoading: boolean;
  categories: ["Food", "Education", "Businessmen", "Positions"];
  message: any;
}

const initialState: BlogData = {
  blogs: [],
  blog: {},
  isLoading: false,
  categories: ["Food", "Education", "Businessmen", "Positions"],
  message: {},
};

const BlogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.isLoading = false;
      state.blogs = action.payload;
    });
    builder.addCase(getBlogs.rejected, (state, action) => {
      state.isLoading = false;
      state.blogs = action.payload;
    });
    builder.addCase(addBlog.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addBlog.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    });
    builder.addCase(addBlog.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    });
  },
});

export default BlogSlice.reducer;
