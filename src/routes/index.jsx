import TrainerProfile from "@/components/main/personaltrainer/trainerprofile";
import MainLayout from "@/layout";
import Home from "@/pages/main/home";
import Join from "@/pages/main/join";
import Membership from "@/pages/main/membership";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/why-join-copt",
        element: <Join />,
      },
      {
        path: "/membership",
        element: <Membership />,
      },
      {
        path: "profile",
        element: <TrainerProfile />,
      },
    ],
  },
]);
