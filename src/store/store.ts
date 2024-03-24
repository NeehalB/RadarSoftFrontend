import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./users/User.Slice";
import BlogReducer from "./blog/Blog.Slice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const store = configureStore({
  reducer: {
    user: UserReducer,
    blog: BlogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
