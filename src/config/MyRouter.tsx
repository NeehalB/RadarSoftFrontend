import { createBrowserRouter } from "react-router-dom";
import Login from "../screens/login/Login";
import Blog from "../screens/blog/Blog";
import AuthWrapper from "./AuthWrapper";

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
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);
