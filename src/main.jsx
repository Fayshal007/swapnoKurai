import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PhotoGallery from "./components/pages/PhotoGallery";
import Handicrafts from "./components/pages/Handicrafts";
import SolutionLab from "./components/pages/SolutionLab";
import Root from "./components/roots/Root";
import Home from "./components/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/photogallery",
        element: <PhotoGallery />,
      },
      {
        path: "/handicraft",
        element: <Handicrafts />,
      },
      {
        path: "/sollutionlab",
        element: <SolutionLab />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
