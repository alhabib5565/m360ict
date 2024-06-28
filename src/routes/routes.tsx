import { createBrowserRouter } from "react-router-dom";
import SidebarLayout from "../components/layout/SidebarLayout";
import { routeGenerator } from "../utils/routeGenerator";
import { paths } from "./paths";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SidebarLayout />,
    children: routeGenerator(paths),
  },
]);

export default router;
