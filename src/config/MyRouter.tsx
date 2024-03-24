import { createBrowserRouter } from "react-router-dom";
import Login from "../screens/login/Login";
import Blog from "../screens/blog/Blog";
import AuthWrapper from "./AuthWrapper";
import AddBlogForm from "../screens/blog/AddBlogForm";
import UserBlog from "../screens/blog/UserBlog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthWrapper />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: "/",
        element: <Blog />,
      },
      {
        path: "/add_blog",
        element: <AddBlogForm />,
      },
      {
        path: "/my_blog",
        element: <UserBlog />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);
