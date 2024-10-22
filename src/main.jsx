import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home/Home.jsx";
import Accommodation from "./pages/Accommodation/Accommodation.jsx";
import Discover from "./pages/Discover/Discover.jsx";

const rooter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/accommodation",
    element: <Accommodation />,
  },
  {
    path: "/discover",
    element: <Discover />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rooter} />
  </StrictMode>
);
