import { createHashRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";
import FriendDetails from "../pages/FriendDetails";
import NotFound from "../pages/NotFound";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> }, // Use index instead of path: "/"
      { path: "timeline", element: <Timeline /> }, // Remove leading slash
      { path: "stats", element: <Stats /> },
      { path: "friend/:id", element: <FriendDetails /> },
    ],
  },
]);

export default router;