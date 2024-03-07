import { createBrowserRouter } from "react-router-dom";
import { Home } from "./page/Home";
import { Post } from "./page/Post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/post/:id",
    element: <Post />,
  },
])