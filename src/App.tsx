import { RouterProvider } from "react-router-dom";
import { router } from "./config/MyRouter";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
