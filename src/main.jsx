import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import PhotoGallery from "./components/pages/PhotoGallery";
import Handicrafts from "./components/pages/Handicrafts";
import SolutionLab from "./components/pages/SolutionLab";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
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
