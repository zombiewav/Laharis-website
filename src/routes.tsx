import { createBrowserRouter } from "react-router";
import Gallery from "./pages/Gallery";
import VersionPage from "./pages/VersionPage";

export const router = createBrowserRouter([
  { path: "/", Component: Gallery },
  { path: "/v/:slug", Component: VersionPage },
  { path: "*", Component: Gallery },
]);
