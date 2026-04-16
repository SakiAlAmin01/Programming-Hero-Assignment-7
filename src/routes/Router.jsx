import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home.jsx";
import Timeline from "../pages/Timeline.jsx";
import Stats from "../pages/Stats.jsx";
import FriendDetails from "../pages/FriendDetails.jsx";
import NotFound from "../pages/NotFound.jsx";

const router = createBrowserRouter([
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