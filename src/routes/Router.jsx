import { createHashRouter } from "react-router-dom"; // ✅ changed
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home.jsx";
import Timeline from "../pages/Timeline.jsx";
import Stats from "../pages/Stats.jsx";
import FriendDetails from "../pages/FriendDetails.jsx";
import NotFound from "../pages/NotFound.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/timeline", element: <Timeline /> },
      { path: "/stats", element: <Stats /> },
      { path: "/friend/:id", element: <FriendDetails /> },
    ],
  },
]);

export default router;