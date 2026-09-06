import { createBrowserRouter, Navigate } from "react-router";
import VersionPage from "./pages/VersionPage";

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/v/kinetic" replace /> },
  { path: "/v/:slug", Component: VersionPage },
  { path: "*", element: <Navigate to="/v/kinetic" replace /> },
]);
